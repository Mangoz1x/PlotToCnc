const { SaveGCode, CalculateVectors, ParseString, ConvertDesmosToVectorArray, CleanVectors } = require("./lib/logic");
const points = require("./data/points-test");
// const letters = require("./data/letters");

// Calculate Heading Text
const ParsedHeading = ParseString("HI, I'M RYAN", {
    yOffset: 3.2,
    xOffset: 2.8,
    scale: 0.25
});

console.log(ParsedHeading[0])

const ParsedHeadingVectors = CalculateVectors({
    points: ParsedHeading,
    OutputText: false,
    ExludeStartXY0: true
});

// Calculate Paragraph Text
const ParsedP1 = ParseString("I GO TO OLQWCA", {
    yOffset: 2.9,
    xOffset: 2.77,
    scale: 0.1,
    letterSpacing: 0.5,
    spaceScale: 0.2,
});

const ParsedP2 = ParseString("I LOVE TO CODE, AND WEIGHT LIFT", {
    yOffset: 2.7,
    xOffset: 2.77,
    scale: 0.1
});

const ParsedP3 = ParseString("IN FACT, I MADE THIS ALL WITH CODE", {
    yOffset: 2.5,
    xOffset: 2.77,
    scale: 0.1
});

const ParsedParagraphVectors = CalculateVectors({
    points: [...ParsedP1, ...ParsedP2, ...ParsedP3],
    OutputText: false,
});

// Calculate Face
const FaceVectors = CalculateVectors({ 
    points, 
    OutputText: false,
    ExludeStartXY0: true
});

const AllCleanedVectors = CleanVectors({
    arrayVectors: [
        ...FaceVectors,
        ...ParsedHeadingVectors, 
        // ...ParsedParagraphVectors
    ],
    OutputText: true
});

// Join Text & Face
const JoinedData = `${AllCleanedVectors}`;

SaveGCode({
    filename: "output.txt",
    code: JoinedData
})


