function optimizeGCode(gCode) {
    let previousX = null;
    let previousY = null;
    let optimizedCode = ["%"];
    let lineIndex = 5;

    // Split the gCode into individual lines
    const lines = gCode;

    for (let i = 0; i < lines.length; i++) {
        let currentLine = lines[i];
        let lineMatch = currentLine.match(/N\d+ (G\d+)? (X-?\d+(\.\d+)?)? (Y-?\d+(\.\d+)?)?/);

        if (lineMatch) {
            let gCode = lineMatch[1];
            let x = lineMatch[2];
            let y = lineMatch[4];

            // Check if the X and Y coordinates are the same as the previous line
            if (x === previousX && y === previousY) {
                continue; // Skip this line if it's a duplicate
            }

            // Update the line number
            currentLine = currentLine.replace(/N\d+/, `N${lineIndex}`);
            lineIndex += 5;

            // Add this line to the optimized code
            optimizedCode.push(currentLine);

            // Update the previous X and Y
            previousX = x;
            previousY = y;
        }
    }

    // Join the optimized code back into a single string
    optimizedCode.push("%");
    return optimizedCode;
}

const CleanVectors = ({ arrayVectors, OutputText }) => {
    const OptimizedCode = optimizeGCode(arrayVectors);

    return !OutputText
        ? OptimizedCode
        : OptimizedCode.join("\n")
}

module.exports = { CleanVectors };