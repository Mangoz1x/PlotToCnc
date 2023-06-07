const { SaveGCode, CalculateVectors, ParseString, ConvertDesmosToVectorArray, CleanVectors } = require("./lib/logic");
const points = require("./data/points-test");
// const letters = require("./data/letters");

// Calculate Heading Text
const ParsedHeading = ParseString("HI, I'M RYAN", {
    yOffset: 3.2,
    xOffset: 2.8,
    scale: 0.25
});

const ParsedHeadingVectors = CalculateVectors({
    points: ParsedHeading,
    OutputText: false,
});

// Calculate Paragraph Text
const ParsedP1 = ParseString("I GO TO OLQWCA HIGHSCHOOL", {
    yOffset: 2.9,
    xOffset: 2.8,
    scale: 0.1
});

const ParsedP2 = ParseString("I LOVE TO CODE, AND WEIGHT LIFT", {
    yOffset: 2.7,
    xOffset: 2.8,
    scale: 0.1
});

const ParsedP3 = ParseString("INFACT, I MADE THIS ALL WITH CODE", {
    yOffset: 2.5,
    xOffset: 2.8,
    scale: 0.1
});

const ParsedParagraphVectors = CalculateVectors({
    points: [...ParsedP1, ...ParsedP2, ...ParsedP3],
    OutputText: false,
});

// Calculate Face
const FaceVectors = CalculateVectors({ 
    points, 
    OutputText: false
});

const AllCleanedVectors = CleanVectors({
    arrayVectors: [...FaceVectors, ...ParsedHeadingVectors, ...ParsedParagraphVectors],
    OutputText: true
});

// Join Text & Face
const JoinedData = `${AllCleanedVectors}`;

SaveGCode({
    filename: "output.txt",
    code: JoinedData
})


