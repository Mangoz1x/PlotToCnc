// Center Y & Move X Away From Edge
const { scaleFactor } = require("./config.json");

// The og desmos string for each letter
const DesmosLetterStrings = {
    A: `\left(0,0\right),\left(0.5,1\right),\left(1,0\right),\left(0.75,0.5\right),\left(0.25,0.5\right)`,
    B: `\left(0,0\right),\left(0,1\right),\left(0.1,1\right),\left(0.5,0.75\right),\left(0.1,0.5\right),\left(0.5,0.25\right),\left(0.1,0\right),\left(0,0\right)`,
    C: `\left(0.75,1\right),\left(0,0.5\right),\left(0.75,0\right)`,
    D: `\left(0,0\right),\left(0,1\right),\left(0.3,1\right),\left(0.6,0.5\right),\left(0.3,0\right),\left(0,0\right)`,
    E: `\left(0.5,0\right),\left(0,0\right),\left(0,0.5\right),\left(0.5,0.5\right),\left(0,0.5\right),\left(0,1\right),\left(0.5,1\right)`,
    F: `\left(0,0\right),\left(0,0.5\right),\left(0.4,0.5\right),\left(0,0.5\right),\left(0,1\right),\left(0.6,1\right)`,
    G: `\left(0.5,0.5\right),\left(1,0.5\right),\left(0.5,0\right),\left(0,0.5\right),\left(0.5,1\right)`,
    H: `\left(0,0\right),\left(0,1\right),\left(0,0.5\right),\left(0.6,0.5\right),\left(0.6,1\right),\left(0.6,0\right)`,
    I: `\left(0.2,0\right),\left(0.8,0\right),\left(0.5,0\right),\left(0.5,1\right),\left(0.2,1\right),\left(0.8,1\right)`,
    J: `\left(0,1\right),\left(1,1\right),\left(0.5,1\right),\left(0.5,0.25\right),\left(0.25,0\right),\left(0,0.25\right)`,
    K: `\left(0,0\right),\left(0,1\right),\left(0,0.5\right),\left(0.5,1\right),\left(0,0.5\right),\left(0.5,0\right)`,
    L: `\left(0.6,0\right),\left(0,0\right),\left(0,1\right)`,
    M: `\left(0,0\right),\left(0,1\right),\left(0.5,0.6\right),\left(1,1\right),\left(1,0\right)`,
    N: `\left(0,0\right),\left(0,1\right),\left(0.65,0\right),\left(0.65,1\right)`,
    O: `\left(0,0.5\right),\left(0.5,1\right),\left(1,0.5\right),\left(0.5,0\right),\left(0,0.5\right)`,
    P: `\left(0,0\right),\left(0,1\right),\left(0.5,0.75\right),\left(0,0.5\right)`,
    Q: `\left(0,0.5\right),\left(0.5,1\right),\left(1,0.5\right),\left(0.75,0.25\right),\left(0.7,0.3\right),\left(0.8,0.2\right),\left(0.75,0.25\right),\left(0.5,0\right),\left(0,0.5\right)`,
    R: `\left(0,0\right),\left(0,1\right),\left(0.5,0.75\right),\left(0,0.5\right),\left(0.5,0\right)`,
    S: `\left(0.5,1\right),\left(0,0.75\right),\left(0.5,0.35\right),\left(0,0\right)`,
    T: `\left(0,1\right),\left(1,1\right),\left(0.5,1\right),\left(0.5,0\right)`,
    U: `\left(0.8,1\right),\left(0.8,0.4\right),\left(0.4,0\right),\left(0,0.4\right),\left(0,1\right)`,
    V: `\left(0,1\right),\left(0.5,0\right),\left(1,1\right)`,
    W: `\left(0,1\right),\left(0,0\right),\left(0.5,0.5\right),\left(1,0\right),\left(1,1\right)`,
    X: `\left(1,1\right),\left(0,0\right),\left(0.5,0.5\right),\left(0,1\right),\left(1,0\right)`,
    Y: `\left(0.15,1\right),\left(0.5,0.6\right),\left(0.5,0\right),\left(0.5,0.6\right),\left(0.85,1\right)`,
    Z: `\left(1,1\right),\left(0,1\right),\left(1,0\right),\left(0,0\right)`,
    2: '\left(0,0.5\right),\left(0.5,1\right),\left(1,0.5\right),\left(0,0\right),\left(1,0\right)',
    0: '\left(0.3,0\right),\left(0,0.3\right),\left(0,0.7\right),\left(0.3,1\right),\left(0.6,0.7\right),\left(0.6,0.3\right),\left(0.3,0\right)'
}

const data = {
    "A": {
        "plot": [
            [
                0,
                0
            ],
            [
                0.5,
                1
            ],
            [
                1,
                0
            ],
            [
                0.75,
                0.5
            ],
            [
                0.25,
                0.5
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "B": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0.3,
                1
            ],
            [
                0.6,
                0.75,
                { g: '02', r: 0.28 }
            ],
            [
                0.3,
                0.5,
                { g: '02', r: 0.28 }
            ],
            [
                0.6,
                0.25,
                { g: '02', r: 0.28 }
            ],
            [
                0.3,
                0,
                { g: '02', r: 0.28 }
            ],
            [
                0,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "C": {
        "plot": [
            [
                0.75,
                0.95,
            ],
            [
                0,
                0.5,
                { g: '03', r: 0.52 }
            ],
            [
                0.75,
                0.05,
                { g: '03', r: 0.52 }
            ],
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "D": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0.2,
                1
            ],
            [
                0.6,
                0.5,
                { g: "02", r: 0.5 }
            ],
            [
                0.2,
                0,
                { g: "02", r: 0.5 }
            ],
            [
                0,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "E": {
        "plot": [
            [
                0.5,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                0.5
            ],
            [
                0.5,
                0.5
            ],
            [
                0,
                0.5
            ],
            [
                0,
                1
            ],
            [
                0.5,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "F": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                0.5
            ],
            [
                0.4,
                0.5
            ],
            [
                0,
                0.5
            ],
            [
                0,
                1
            ],
            [
                0.6,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "G": {
        "plot": [
            [
                0.5,
                0.5
            ],
            [
                1,
                0.5
            ],
            [
                0.5,
                0,
                { g: '02', r: 0.5 }
            ],
            [
                0,
                0.5,
                { g: '02', r: 0.5 }
            ],
            [
                0.5,
                1,
                { g: '02', r: 0.5 }
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "H": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                0.5
            ],
            [
                0.6,
                0.5
            ],
            [
                0.6,
                1
            ],
            [
                0.6,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "I": {
        "plot": [
            [
                0.2,
                0
            ],
            [
                0.8,
                0
            ],
            [
                0.5,
                0
            ],
            [
                0.5,
                1
            ],
            [
                0.2,
                1
            ],
            [
                0.8,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "J": {
        "plot": [
            [
                0,
                1
            ],
            [
                1,
                1
            ],
            [
                0.5,
                1
            ],
            [
                0.5,
                0.25
            ],
            [
                0.25,
                0
            ],
            [
                0,
                0.25
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "K": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                0.5
            ],
            [
                0.5,
                1
            ],
            [
                0,
                0.5
            ],
            [
                0.5,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "L": {
        "plot": [
            [
                0.6,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "M": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0.35,
                0.6
            ],
            [
                0.7,
                1
            ],
            [
                0.7,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "N": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0.65,
                0
            ],
            [
                0.65,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "O": {
        "plot": [
            [
                0,
                0.5,
            ],
            [
                0.5,
                1,
                { g: '02', r: 0.5 }
            ],
            [
                1,
                0.5,
                { g: '02', r: 0.5 }
            ],
            [
                0.5,
                0,
                { g: '02', r: 0.5 }
            ],
            [
                0,
                0.5,
                { g: '02', r: 0.5 }
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "P": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1
            ],
            [
                0.2,
                1
            ],
            [
                0.5,
                0.75,
                { g: '02', r: 0.28 }
            ],
            [
                0.2,
                0.5,
                { g: '02', r: 0.28 }
            ],
            [
                0,
                0.5
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "Q": {
        "plot": [
            [
                0,
                0.5
            ],
            [
                0.5,
                1
            ],
            [
                1,
                0.5
            ],
            [
                0.75,
                0.25
            ],
            [
                0.7,
                0.3
            ],
            [
                0.8,
                0.2
            ],
            [
                0.75,
                0.25
            ],
            [
                0.5,
                0
            ],
            [
                0,
                0.5
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "R": {
        "plot": [
            [
                0,
                0
            ],
            [
                0,
                1,
            ],
            [
                0.2,
                1,
            ],
            [
                0.5,
                0.75,
                { g: '02', r: 0.28 }
            ],
            [
                0.2,
                0.5,
                { g: '02', r: 0.28 }
            ],
            [
                0,
                0.5,
            ],
            [
                0.5,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "S": {
        "plot": [
            [
                0.5,
                0.85
            ],
            [
                0,
                0.75,
                { g: '03', r: 0.26 }
            ],
            [
                0.25,
                0.5,
                { g: '03', r: 0.26 }
            ],
            [
                0.5,
                0.25,
                { g: '02', r: 0.26 }
            ],
            [
                0,
                0.15,
                { g: '02', r: 0.26 }
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "T": {
        "plot": [
            [
                0,
                1
            ],
            [
                1,
                1
            ],
            [
                0.5,
                1
            ],
            [
                0.5,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "U": {
        "plot": [
            [
                0.8,
                1
            ],
            [
                0.8,
                0.4,
            ],
            [
                0.4,
                0,
                { g: '02', r: 0.4 }
            ],
            [
                0,
                0.4,
                { g: '02', r: 0.4 }
            ],
            [
                0,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "V": {
        "plot": [
            [
                0,
                1
            ],
            [
                0.5,
                0
            ],
            [
                1,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "W": {
        "plot": [
            [
                0,
                1
            ],
            [
                0,
                0
            ],
            [
                0.5,
                0.5
            ],
            [
                1,
                0
            ],
            [
                1,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "X": {
        "plot": [
            [
                1,
                1
            ],
            [
                0,
                0
            ],
            [
                0.5,
                0.5
            ],
            [
                0,
                1
            ],
            [
                1,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "Y": {
        "plot": [
            [
                0.15,
                1
            ],
            [
                0.5,
                0.6
            ],
            [
                0.5,
                0
            ],
            [
                0.5,
                0.6
            ],
            [
                0.85,
                1
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "Z": {
        "plot": [
            [
                1,
                1
            ],
            [
                0,
                1
            ],
            [
                1,
                0
            ],
            [
                0,
                0
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    ",": {
        "plot": [
            [
                0.05,
                0.05
            ],
            [
                -0.05,
                -0.05,
                { g: '02', r: 1 }
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    ".": {
        "plot": [
            [
                0.05,
                0.05
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "'": {
        "plot": [
            [
                0.05,
                1.05
            ],
            [
                -0.05,
                0.95,
                { g: '02', r: 1 }
            ]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "2": {
        "plot": [
            [0, 0.5],
            [0, 0.7],
            [0.3, 1, { g: '02', r: 0.3 }],
            [0.6, 0.7, { g: '02', r: 0.3 }],
            [0.6, 0.5],
            [0, 0],
            [0.6, 0]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "0": {
        "plot": [
            [0.3, 0],
            [0, 0.3, { g: '02', r: 0.3 }],
            [0, 0.7],
            [0.3, 1, { g: '02', r: 0.3 }],
            [0.6, 0.7, { g: '02', r: 0.3 }],
            [0.6, 0.3],
            [0.3, 0, { g: '02', r: 0.3 }]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    },
    "3": {
        "plot": [
            [0, 1], 
            [0.35, 1],
            [0.55, 0.75, { g: '02', r: 0.25 }], 
            [0.35, 0.5, { g: '02', r: 0.25 }], 
            [0, 0.5],
            [0.35, 0.5],
            [0.55, 0.25, { g: '02', r: 0.25 }],
            [0.35, 0, { g: '02', r: 0.25 }], 
            [0, 0]
        ],
        "xOffset": 0,
        "yOffset": 0,
        "scaleFactor": scaleFactor
    }
}

module.exports = data;