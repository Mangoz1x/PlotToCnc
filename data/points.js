// Center Y & Move X Away From Edge
const { GlobalX, GlobalY, scaleFactor } = require("./config.json");

const data = [
    { 
        plot: [[0, 0], [24, 0], [24, 16], [0, 16], [0, 0]],
        xOffset: 0,
        yOffset: 0,
        scaleFactor: scaleFactor
    },
    {
        plot: [[2.6, 3.1], [4, 1.5], [4.5, 1.1], [5, 0.95], [5.5, 0.85], [6, 0.9], [6.5, 1.1], [7, 1.5], [8, 2.9], [8.8, 4.1], [9.1, 5], [9.2, 6], [9.15, 7], [9, 8], [8.8, 9], [8.4, 10], [8.4, 10.5], [8, 10.8], [7.5, 11], [7, 11.2], [6, 11.5], [5.5, 11.6], [5, 11.6], [4, 11.5], [3, 11.1], [2.5, 10.9], [2, 10.5], [1.8, 9], [1.5, 7], [1.5, 6], [1.67, 5], [1.9, 4.1], [2.6, 3.1]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[1.5, 6.6], [1.4, 7], [1.4, 7.7], [1.4, 8], [1.5, 8.5], [1.4, 9], [1.3, 9.5], [1.3, 10], [1.2, 10.3], [1, 10.8], [1.05, 11.4], [0.9, 12], [1, 12.3], [1.2, 12.6], [2, 12.9], [2.8, 13.2], [4, 13.5], [5.25, 13.6], [6.5, 13.5], [7.6, 13.2], [8.4, 13], [8.9, 12.8], [9, 12.7], [9.1, 12.4], [9, 12], [8.95, 11.5], [9.05, 11], [9.15, 10.6], [9.1, 10], [9.2, 8.8], [9.2, 8], [9.15, 7]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[1.8, 8.4], [2, 8.8], [2.4, 9], [3, 9], [4, 8.8], [4.2, 8.6], [4.1, 8.4], [3, 8.5], [2.7, 8.55], [2.4, 8.5], [2, 8.4], [1.8, 8.4]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[5.9, 8.5], [5.9, 8.8], [6.2, 9], [7, 9.2], [7.7, 9.3], [8, 9.25], [8.4, 9.1], [8.6, 9], [8.8, 8.7], [8.6, 8.7], [8, 8.8], [7.6, 8.8], [7, 8.7], [6.7, 8.6], [5.9, 8.5]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[5.9, 8.5], [5.9, 8.8], [6.2, 9], [7, 9.2], [7.7, 9.3], [8, 9.25], [8.4, 9.1], [8.6, 9], [8.8, 8.7], [8.6, 8.7], [8, 8.8], [7.6, 8.8], [7, 8.7], [6.7, 8.6], [5.9, 8.5]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[3.2, 4.6], [4, 4.65], [4.8, 4.7], [5.4, 4.7], [6, 4.7], [6.8, 4.66], [7, 4.7], [7.3, 4.8], [7.5, 4.85], [7.25, 4.55], [6.7, 4.1], [6.4, 3.9], [6, 3.7], [5.5, 3.6], [5.3, 3.65], [5, 3.6], [4.7, 3.65], [4.5, 3.75], [4, 4], [3.6, 4.2], [3.2, 4.6], [4, 4.35], [4.5, 4.3], [5, 4.25], [5.5, 4.27], [6, 4.35], [6.5, 4.45], [7, 4.6], [7.5, 4.85]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[2.85, 4], [2.7, 4.2], [2.55, 4.45], [2.5, 4.8], [2.52, 5], [2.75, 5.4], [3.5, 5.9]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[8, 4.4], [8.2, 4.8], [8.3, 5.2], [8.26, 5.35], [8.15, 5.5], [7.9, 5.65], [7.5, 5.85]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[2.5, 7.55], [2.8, 7.7], [3.2, 7.8], [3.6, 7.83], [3.9, 7.8], [4.2, 7.7], [4, 7.6], [3.8, 7.57], [3.6, 7.5], [3.3, 7.42], [3.1, 7.44], [2.8, 7.5], [2.5, 7.55]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[6.1, 7.8], [6.4, 7.95], [6.6, 7.98], [6.8, 8], [7.2, 8], [7.5, 7.95], [7.8, 7.9], [8, 7.9], [7.7, 7.7], [7.4, 7.63], [7, 7.6], [6.6, 7.65], [6.4, 7.72], [6.1, 7.8]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[3, 7.6], [3, 7.68], [3.07, 7.76], [3.2, 7.8], [3.6, 7.83], [3.7, 7.7], [3.68, 7.6], [3.6, 7.5], [3.3, 7.42], [3.1, 7.44], [3, 7.6]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[6.64, 7.8], [6.6, 7.9], [6.6, 7.98], [6.8, 8], [7.2, 8], [7.35, 7.9], [7.33, 7.8], [7.2, 7.66], [7, 7.6], [6.85, 7.63], [6.72, 7.7], [6.64, 7.8]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
    {
        plot: [[4.75, 7.9], [4.7, 7.3], [4.5, 6.5], [4.33, 6], [4.3, 5.8], [4.4, 5.6], [4.6, 5.55], [4.9, 5.5], [5.25, 5.4], [5.6, 5.5], [5.9, 5.55], [6.1, 5.6], [6.2, 5.8], [6.16, 6], [6, 6.5], [5.8, 7.3], [5.75, 7.9]],
        xOffset: GlobalX,
        yOffset: GlobalY,
        scaleFactor: scaleFactor 
    },
];

module.exports = data;