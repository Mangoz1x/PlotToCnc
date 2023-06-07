function optimizeGCode(gCode, { IncludeClosingTag, IncludeOpenTag }) {
    let previousX = null;
    let previousY = null;
    let optimizedCode = [];
    let lineIndex = 5;

    if (IncludeOpenTag === undefined || IncludeOpenTag === true) {
        optimizedCode.push(`%`);
    }

    const lines = gCode;
    const regex = /N\d+ (G\d+)? ?(X-?\d+(\.\d+)?)? ?(Y-?\d+(\.\d+)?)?/;

    for (let i = 0; i < lines.length; i++) {
        let currentLine = lines[i];
        let lineMatch = currentLine.match(regex);

        if (lineMatch) {
            let gCode = lineMatch[1];
            let x = lineMatch[2];
            let y = lineMatch[4];

            if (x === previousX && y === previousY && (gCode === 'G00' || gCode === 'G01' || gCode === 'G02' || gCode === 'G03')) {
                continue;
            }

            if (x === previousX) {
                currentLine = currentLine.replace(new RegExp(`(X${x})`), "");
            }

            if (y === previousY) {
                currentLine = currentLine.replace(new RegExp(`(Y${y})`), "");
            }

            currentLine = currentLine.replace(/N\d+/, `N${lineIndex}`);
            lineIndex += 5;

            optimizedCode.push(currentLine);

            previousX = x;
            previousY = y;
        }
    }

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