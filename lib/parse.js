function ConvertDesmosToVectorArray(string) {
    // Remove left and right parentheses and split by comma
    let pointStrings = string.replace(/\left\(/g, '').replace(/\right\)/g, '').split(',');

    // Group by two elements and parse to integers
    let points = [];
    for (let i = 0; i < pointStrings.length; i += 2) {
        points.push([parseFloat(pointStrings[i]), parseFloat(pointStrings[i + 1])]);
    }

    return points;
}

module.exports = { ConvertDesmosToVectorArray };