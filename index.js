const { SaveGCode, CalculateVectors, ConvertDesmosToVectorArray, CleanVectors } = require("./lib/logic");
const points = require("./data/points");

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
