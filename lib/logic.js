const { MaximumDecimals, SpindleSpeed, ZLift, ZCut, FeedRate, StartCoordinates } = require("../data/config.json");
const { ConvertDesmosToVectorArray } = require("./parse");
const { CleanVectors } = require("./optimize");
const letters = require("../data/letters");

const fs = require("fs");

// Track the line number of the code
let CurrentLine;

// Helper functions
const RoundNumber = ({ places, number }) => parseFloat(number.toFixed(places || 4));
const IncrementLineNumber = () => CurrentLine += 5;

const CalculateVectors = ({ points, StartSequence, EndSequence, OutputText, ExludeStartXY0 }) => {
    if (!points) throw new Error("Please provide a 3d array of points to create the code.");
    CurrentLine = null;

    // 3d array of coordinates. Each array is a path, and each point in the path is a 2d coordinate
    const StartX = RoundNumber({
        number: (StartCoordinates.x * StartCoordinates.scaleFactor) + StartCoordinates.xOffset,
        places: MaximumDecimals
    });

    const StartY = RoundNumber({
        number: (StartCoordinates.y * StartCoordinates.scaleFactor) + StartCoordinates.yOffset,
        places: MaximumDecimals
    });

    const Code = StartSequence || [
        `%`,
        `N5 G20`,
        `N10 G90`,
        `N15 G00 Z${ZLift}`,
        `N20 G00 X0 Y0 M03 S${SpindleSpeed}`,
    ];
    
    if (!ExludeStartXY0) {
        Code.push(`N25 G00 X${StartX} Y${StartY}`);
    }

    // Update Line Of Code To Account For Start Sequence
    CurrentLine = Code.length * 5;

    // Do Iterations and calculate points
    for (let pathIndex = 0; pathIndex < points.length; pathIndex++) {
        const path = points[pathIndex];

        for (let pointIndex = 0; pointIndex < path.plot.length; pointIndex++) {
            const Point = path.plot[pointIndex];
            const FirstPath = pathIndex === 0 && pointIndex === 0;

            const XPoint = RoundNumber({
                number: (Point[0] * path.scaleFactor) + (path?.xOffset || 0),
                places: MaximumDecimals
            });

            const YPoint = RoundNumber({
                number: (Point[1] * path.scaleFactor) + (path?.yOffset || 0),
                places: MaximumDecimals
            });

            const PointOptions = Point?.[2];
            
            const SetGCode = PointOptions?.g 
                ? `G${PointOptions.g}`
                : (FirstPath ? "G00" : "G01");

            const SetRadiusValue = (SetGCode === "G02" || SetGCode === "G03") && PointOptions?.r
                ? `R${PointOptions.r * path.scaleFactor}`
                : ``;

            const Line = `N${CurrentLine} ${SetGCode} X${XPoint} Y${YPoint} ${SetRadiusValue}`;
            Code.push(Line);
            IncrementLineNumber();

            // If its the first line also tell the bit to go down
            // if (FirstPath) {
                // Code.push(`N${CurrentLine} G01 Z${ZCut} F${FeedRate}`);
            //     IncrementLineNumber();
            // }
        }

        Code.push(`N${CurrentLine} G00 Z${ZLift}`);
        IncrementLineNumber();

        const NextPath = points[pathIndex + 1];
        if (NextPath) {
            const NextPoint = NextPath.plot[0];
            const XPoint = RoundNumber({
                number: (NextPoint[0] * NextPath.scaleFactor) + (NextPath?.xOffset || 0),
                places: MaximumDecimals,
            });

            const YPoint = RoundNumber({
                number: (NextPoint[1] * NextPath.scaleFactor) + (NextPath?.yOffset || 0),
                places: MaximumDecimals
            });

            Code.push(`N${CurrentLine} G00 X${XPoint} Y${YPoint}`);
            IncrementLineNumber();

            Code.push(`N${CurrentLine} G01 Z${ZCut}`);
            IncrementLineNumber();
        }
    }

    // Push the end sequence
    Code.push(...(EndSequence || [
        `N${CurrentLine} G00 Z${ZLift}`,
        `N${CurrentLine + 5} G00 X0 Y0 M05`,
        `N${CurrentLine + 10} G00 M30`,
        `%`
    ]));

    return !OutputText
        ? Code
        : Code.join("\n");
};

const SaveGCode = ({ filename, code }) => {
    fs.writeFileSync(filename || "output.txt", code);
    return "saved";
}

const ParseString = (string, { scale, spaceScale, letterSpacing, yOffset, xOffset }) => { 
    const seperated = string.split("");
    let output = [];
    let distance = 0;

    spaceScale = spaceScale || scale || 0.25;

    for (const char of seperated) {
        if (char === " ") {
            distance = distance+(0.8*spaceScale);
            continue;
        }
        
        let modifiedLetter = Object.assign({}, letters[char]);
        let largestX = 0;

        for (const point of modifiedLetter.plot)
            if (point[0] > largestX) largestX = point[0];
            
        if (!modifiedLetter) 
            continue;

        if (scale)
            modifiedLetter.scaleFactor = scale;

        // Define offsets
        xOffset = (xOffset || modifiedLetter.xOffset);
        yOffset = (yOffset || modifiedLetter.yOffset);

        modifiedLetter.xOffset += (distance + xOffset);
        modifiedLetter.yOffset += yOffset;

        output.push(modifiedLetter);
        distance += (largestX * modifiedLetter.scaleFactor) + ((letterSpacing || 0.2) * modifiedLetter.scaleFactor);
    }

    return output;
}

module.exports = {
    ParseString,
    CalculateVectors,
    SaveGCode,
    ConvertDesmosToVectorArray,
    CleanVectors
};
