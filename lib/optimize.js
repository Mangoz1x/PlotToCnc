const { SpindleSpeed, FeedRate, ZCut } = require("../data/config.json");

function optimizeGCode(gCode, { IncludeClosingTag, IncludeOpenTag }) {
    let previousX = null;
    let previousY = null;
    let previousZ = null;
    let optimizedCode = [];
    let lineIndex = 10;

    let g20d = false;
    let g90d = false;
    let m05d = true;
    let m30d = true;
    let sd = false;
    let fd = false;

    if (IncludeOpenTag === undefined || IncludeOpenTag === true) {
        // 3d array of coordinates. Each array is a path, and each point in the path is a 2d coordinate
        optimizedCode.push(`%`);
    }

    const lines = gCode;
    const regex = /N\d+ (G\d+)? ?(X-?\d+(\.\d+)?)? ?(Y-?\d+(\.\d+)?)?/;

    for (let i = 0; i < lines.length; i++) {
        let currentLine = lines[i];
        let lineMatch = currentLine.match(regex);
        const zVal = currentLine?.split("Z")?.[1]?.split(" ")?.[0];

        // ADD M03 Doesnt Work
        // if (![...optimizedCode, currentLine]?.join("")?.includes("M03") && i > 3) {
        //     optimizedCode.push(`N${lineIndex} G00 M03`);
        //     lineIndex += 5;
        // }
        
        const includesG20 = currentLine?.includes("G20");
        const includesG90 = currentLine?.includes("G90");
        const includesM05 = currentLine?.includes("M05");
        const includesM30 = currentLine?.includes("M30");
        const includesS = currentLine?.includes("S" + SpindleSpeed);
        const includesF = currentLine?.includes("F" + FeedRate);

        if (g20d && includesG20) continue;
        if (g90d && includesG90) continue;
        if (m05d && includesM05) continue;
        if (m30d && includesM30) continue;
        if (sd && includesS) continue;
        if (fd && includesF) continue;

        if (includesG20) g20d = true;
        if (includesG90) g90d = true;
        if (includesM05) m05d = true;
        if (includesM30) m30d = true;
        if (includesS) sd = true;
        if (includesF) fd = true;
        
        if (lineMatch) {
            let gCode = lineMatch[1];
            let x = lineMatch[2];
            let y = lineMatch[4];

            if ((gCode === 'G01' || gCode === 'G02' || gCode === '03') && previousZ > ZCut && zVal !== ZCut) {
                optimizedCode.push(`N${lineIndex} ${gCode} Z${ZCut}`);
                lineIndex += 5;
                previousZ = zVal;
            }

            if (x === previousX) {
                let newLine = currentLine.split(" ");
                const xVal = newLine.find(itm => itm.includes("X"));
                
                newLine[newLine.indexOf(xVal)] = '';
                const newArray = newLine.filter(val => val !== '');
                currentLine = newArray.join(" ");
            }

            if (y === previousY) {
                let newLine = currentLine.split(" ");
                const yVal = newLine.find(itm => itm.includes("Y"));
                
                newLine[newLine.indexOf(yVal)] = '';
                const newArray = newLine.filter(val => val !== '');
                currentLine = newArray.join(" ");
            }

            if (zVal === previousZ) {
                let newLine = currentLine.split(" ");
                const nzVal = newLine.find(itm => itm.includes("Z"));

                newLine[newLine.indexOf(nzVal)] = '';
                const newArray = newLine.filter(val => val !== '');
                currentLine = newArray.join(" ");
            }

            // If line has G00, G01, G02, G03 only with no coordinates, remove the line
            if ((gCode === 'G00' || gCode === 'G01' || gCode === 'G02' || gCode === 'G03') && !currentLine.includes('X') && !currentLine.includes('Y') && !currentLine.includes("Z")) {
                continue;
            }

            currentLine = currentLine.replace(/N\d+/, `N${lineIndex}`);
            lineIndex += 5;

            optimizedCode.push(currentLine);

            if (x) previousX = x;
            if (y) previousY = y;
            if (zVal) previousZ = zVal;
        }
    }

    optimizedCode.push(...[
        `N${lineIndex} G00 X0 Y0 M05`,
        `N${lineIndex+5} G00 M30`
    ]);

    if (IncludeClosingTag === undefined || IncludeClosingTag === true) {
        optimizedCode.push("%");
    }

    return optimizedCode;
}


const CleanVectors = ({ arrayVectors, OutputText, IncludeOpenTag, IncludeClosingTag }) => {
    const OptimizedCode = optimizeGCode(arrayVectors, { IncludeOpenTag, IncludeClosingTag });

    return !OutputText
        ? OptimizedCode
        : OptimizedCode.join("\n")
}

module.exports = { CleanVectors };