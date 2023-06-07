const { SaveGCode, CalculateVectors, ParseString, ConvertDesmosToVectorArray, CleanVectors } = require("./lib/logic");
const points = require("./data/points-test");
const letters = require("./data/letters");

const ParsedString = ParseString("HI, I'M RYAN", {
    scale: 2
});

const Calced = CalculateVectors({
    points: ParsedString,
    OutputText: true,
});

SaveGCode({ 
    filename: "output.txt",
    code: Calced 
});

return;
// For finished product
const Vectors = CalculateVectors({ 
    points, 
    OutputText: false 
});

const CleanedVectors = CleanVectors({
    arrayVectors: Vectors,
    OutputText: true
});

SaveGCode({ 
    filename: "output.txt",
    code: CleanedVectors 
});
