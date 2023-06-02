const { MaximumDecimals, SpindleSpeed, ZLift, ZCut, FeedRate, StartCoordinates } = require("../data/config.json");
const { ConvertDesmosToVectorArray } = require("./parse");
const { CleanVectors } = require("./optimize");

const fs = require("fs");

// Track the line number of the code
let CurrentLine;

// Helper functions
const RoundNumber = ({ places, number }) => parseFloat(number.toFixed(places || 4));
const IncrementLineNumber = () => CurrentLine += 5;

const CalculateVectors = ({ points, StartSequence, EndSequence, OutputText }) => {
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
        `N20 G00 X0 Y0 S${SpindleSpeed}`,
        `N25 G00 X${StartX} Y${StartY}`,
    ];

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

            const Line = `N${CurrentLine} ${FirstPath ? "G00" : "G01"} X${XPoint} Y${YPoint}`;
            Code.push(Line);
            IncrementLineNumber();

            // If its the first line also tell the bit to go down
            if (FirstPath) {
                Code.push(`N${CurrentLine} G01 Z${ZCut} F${FeedRate}`);
                IncrementLineNumber();
            }

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

module.exports = {
    CalculateVectors,
    SaveGCode,
    ConvertDesmosToVectorArray,
    CleanVectors
};
