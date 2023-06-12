const { SaveGCode, CalculateVectors, ParseString, ConvertDesmosToVectorArray, CleanVectors } = require("./lib/logic");
const points = require("./data/points-test");
const weightImg = require("./data/weight-image");
// const letters = require("./data/letters");

// Calculate Heading Text
const ParsedHeading = ParseString("HI, I'M RYAN", {
    yOffset: 3.2,
    xOffset: 2.8,
    scale: 0.3
});

const ParsedHeadingVectors = CalculateVectors({
    points: ParsedHeading,
    OutputText: false,
    ExludeStartXY0: true
});

// Calculate Paragraph Text
const ParsedP1 = ParseString("I ATTEND OLQWCA", {
    yOffset: 2.8,
    xOffset: 2.77,
    scale: 0.17,
    letterSpacing: 0.25,
    spaceScale: 0.2,
});

const ParsedP2 = ParseString("I LOVE TO CODE", {
    yOffset: 2.5,
    xOffset: 2.77,
    scale: 0.17,
    letterSpacing: 0.25,
    spaceScale: 0.2
});

const ParsedP3 = ParseString("I LIFT WEIGHTS", {
    yOffset: 2.2,
    xOffset: 2.77,
    scale: 0.17,
    letterSpacing: 0.25,
    spaceScale: 0.2,
});

const Year = ParseString("2023", {
    yOffset: 0.4,
    xOffset: 2.77,
    scale: 0.4,
    letterSpacing: 0.25,
    spaceScale: 0.2,
});

const ParsedParagraphVectors = CalculateVectors({
    points: [...ParsedP1, ...ParsedP2, ...ParsedP3, ...Year],
    OutputText: false,
    ExludeStartXY0: true
});

// Calculate Face
const WeightVectors = CalculateVectors({
    points: weightImg, 
    OutputText: false,
    ExludeStartXY0: true,

});

const FaceVectors = CalculateVectors({ 
    points, 
    OutputText: false,
    ExludeStartXY0: true
});

const AllCleanedVectors = CleanVectors({
    arrayVectors: [
        ...FaceVectors,
        ...ParsedHeadingVectors, 
        ...ParsedParagraphVectors,
        ...WeightVectors
    ],
    OutputText: true
});

// Join Text & Face
const JoinedData = `${AllCleanedVectors}`;

SaveGCode({
    filename: "output.txt",
    code: JoinedData
})


