// Center Y & Move X Away From Edge
const scaleFactor = 0.75;
const ImgXO = 2.77;
const ImgYO = 0.625;

const OgDesmos = [
    `\left(0.1,1\right),\left(0.18,0.85\right),\left(0.28,0.9\right),\left(0.35,0.75\right),\left(0.46,0.62\right),\left(0.55,0.65\right),\left(0.6,0.58\right),\left(0.67,0.55\right),\left(0.73,0.58\right),\left(0.81,0.48\right),\left(0.95,0.55\right),\left(0.93,0.9\right),\left(0.86,1.14\right),\left(1.2,1.3\right),\left(1.4,1.35\right),\left(1.6,1.375\right),\left(1.8,1.4\right),\left(2,1.4\right),\left(2.2,1.39\right),\left(2.4,1.37\right),\left(2.6,1.32\right),\left(2.8,1.26\right),\left(3,1.19\right),\left(3.18,1.1\right),\left(3.1,0.9\right),\left(3.07,0.8\right),\left(3.055,0.7\right),\left(3.05,0.56\right),\left(3.16,0.49\right),\left(3.24,0.58\right),\left(3.35,0.57\right),\left(3.4,0.6\right),\left(3.43,0.635\right),\left(3.52,0.635\right),\left(3.55,0.65\right),\left(3.69,0.85\right),\left(3.78,0.8\right),\left(3.86,0.91\right),\left(3.76,0.975\right),\left(3.835,1.16\right),\left(3.86,1.27\right),\left(3.79,1.31\right),\left(3.825,1.48\right),\left(3.73,1.53\right),\left(3.75,1.62\right),\left(3.755,1.71\right),\left(3.6,1.73\right),\left(3.485,1.6\right),\left(3.407,1.5\right),\left(3.34,1.402\right),\left(3.258,1.254\right)`,
    `\left(3.258,1.254\right),\left(3.153,1.295\right),\left(2.9896,1.356\right),\left(2.826,1.414\right),\left(2.662,1.466\right),\left(2.361,1.533\right),\left(2.104,1.564\right),\left(1.843,1.5656\right),\left(1.5497,1.5427\right),\left(1.3336,1.5003\right),\left(1.177,1.457\right),\left(0.984,1.399\right),\left(0.7829,1.3164\right),\left(0.716,1.475\right),\left(0.645,1.625\right),\left(0.5908,1.7226\right),\left(0.5347,1.7986\right),\left(0.5,1.82\right),\left(0.3723,1.7765\right),\left(0.3425,1.7173\right),\left(0.34,1.62\right),\left(0.2998,1.6143\right),\left(0.272,1.5936\right),\left(0.2525,1.551\right),\left(0.2457,1.4945\right),\left(0.2464,1.4006\right),\left(0.18,1.3857\right),\left(0.171,1.298\right),\left(0.181,1.2\right),\left(0.212,1.0726\right),\left(0.1,1\right)`,
    `\left(0.212,1.0726\right),\left(0.2457,0.9804\right),\left(0.28,0.9\right)`,
    `\left(0.2464,1.4006\right),\left(0.254,1.309\right),\left(0.2653,1.2364\right),\left(0.2867,1.1665\right),\left(0.3182,1.0646\right),\left(0.3558,0.967\right),\left(0.41,0.86\right),\left(0.467,0.77\right),\left(0.55,0.65\right)`,
    `\left(0.34,1.62\right),\left(0.35,1.494\right),\left(0.371,1.35\right),\left(0.407,1.198\right),\left(0.471,0.995\right),\left(0.556,0.836\right),\left(0.65,0.7\right),\left(0.73,0.58\right)`,
    `\left(0.5,1.82\right),\left(0.503,1.652\right),\left(0.54,1.367\right),\left(0.618,1.1\right),\left(0.718,0.879\right),\left(0.83,0.684\right),\left(0.95,0.55\right)`,
    `\left(3.69,0.85\right),\left(3.7265,0.917\right),\left(3.76,0.975\right)`,
    `\left(3.79,1.31\right),\left(3.7363,1.179\right),\left(3.665,1.049\right),\left(3.603,0.934\right),\left(3.513,0.784\right),\left(3.43,0.635\right)`,
    `\left(3.73,1.53\right),\left(3.6953,1.407\right),\left(3.655,1.301\right),\left(3.612,1.1825\right),\left(3.542,1.046\right),\left(3.45,0.9\right),\left(3.361,0.758\right),\left(3.288,0.652\right),\left(3.24,0.58\right)`,
    `\left(3.6,1.73\right),\left(3.594,1.562\right),\left(3.5445,1.4005\right),\left(3.455,1.218\right),\left(3.375,1.0585\right),\left(3.279,0.88\right),\left(3.186,0.744\right),\left(3.103,0.617\right),\left(3.05,0.56\right)`
];


const data = [
    {
        plot: [
            [0.1, 1], [0.18, 0.85], [0.28, 0.9],
            [0.35, 0.75], [0.46, 0.62], [0.55, 0.65],
            [0.6, 0.58], [0.67, 0.55], [0.73, 0.58],
            [0.81, 0.48], [0.95, 0.55], [0.93, 0.9],
            [0.86, 1.14], [1.2, 1.3], [1.4, 1.35],
            [1.6, 1.375], [1.8, 1.4], [2, 1.4],
            [2.2, 1.39], [2.4, 1.37], [2.6, 1.32],
            [2.8, 1.26], [3, 1.19], [3.18, 1.1],
            [3.1, 0.9], [3.07, 0.8], [3.055, 0.7],
            [3.05, 0.56], [3.16, 0.49], [3.24, 0.58],
            [3.35, 0.57], [3.4, 0.6], [3.43, 0.635],
            [3.52, 0.635], [3.55, 0.65], [3.69, 0.85],
            [3.78, 0.8], [3.86, 0.91], [3.76, 0.975],
            [3.835, 1.16], [3.86, 1.27], [3.79, 1.31],
            [3.825, 1.48], [3.73, 1.53], [3.75, 1.62],
            [3.755, 1.71], [3.6, 1.73], [3.485, 1.6],
            [3.407, 1.5], [3.34, 1.402], [3.258, 1.254]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [3.258, 1.254], [3.153, 1.295],
            [2.9896, 1.356], [2.826, 1.414],
            [2.662, 1.466], [2.361, 1.533],
            [2.104, 1.564], [1.843, 1.5656],
            [1.5497, 1.5427], [1.3336, 1.5003],
            [1.177, 1.457], [0.984, 1.399],
            [0.7829, 1.3164], [0.716, 1.475],
            [0.645, 1.625], [0.5908, 1.7226],
            [0.5347, 1.7986], [0.5, 1.82],
            [0.3723, 1.7765], [0.3425, 1.7173],
            [0.34, 1.62], [0.2998, 1.6143],
            [0.272, 1.5936], [0.2525, 1.551],
            [0.2457, 1.4945], [0.2464, 1.4006],
            [0.18, 1.3857], [0.171, 1.298],
            [0.181, 1.2], [0.212, 1.0726],
            [0.1, 1]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [[0.212, 1.0726], [0.2457, 0.9804], [0.28, 0.9]],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [0.2464, 1.4006],
            [0.254, 1.309],
            [0.2653, 1.2364],
            [0.2867, 1.1665],
            [0.3182, 1.0646],
            [0.3558, 0.967],
            [0.41, 0.86],
            [0.467, 0.77],
            [0.55, 0.65]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [0.34, 1.62],
            [0.35, 1.494],
            [0.371, 1.35],
            [0.407, 1.198],
            [0.471, 0.995],
            [0.556, 0.836],
            [0.65, 0.7],
            [0.73, 0.58]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [0.5, 1.82],
            [0.503, 1.652],
            [0.54, 1.367],
            [0.618, 1.1],
            [0.718, 0.879],
            [0.83, 0.684],
            [0.95, 0.55]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [[3.69, 0.85], [3.7265, 0.917], [3.76, 0.975]],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [3.79, 1.31],
            [3.7363, 1.179],
            [3.665, 1.049],
            [3.603, 0.934],
            [3.513, 0.784],
            [3.43, 0.635]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [3.73, 1.53],
            [3.6953, 1.407],
            [3.655, 1.301],
            [3.612, 1.1825],
            [3.542, 1.046],
            [3.45, 0.9],
            [3.361, 0.758],
            [3.288, 0.652],
            [3.24, 0.58]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
    {
        plot: [
            [3.6, 1.73],
            [3.594, 1.562],
            [3.5445, 1.4005],
            [3.455, 1.218],
            [3.375, 1.0585],
            [3.279, 0.88],
            [3.186, 0.744],
            [3.103, 0.617],
            [3.05, 0.56]
        ],
        xOffset: ImgXO,
        yOffset: ImgYO,
        scaleFactor: scaleFactor
    },
];

module.exports = data;