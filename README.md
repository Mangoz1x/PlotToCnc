## PlotToCnc
#### This program will take in a 3D array of vectors/xy coordinates and other factors like StartX StartY and scaleFactor to determine position of GCode/Drawing and Scale. Other factors can be seen in the demo file index.js. This script will take your 3d vector array and convert it to GCode.
## Run the program

Install required dependencies

```bash
  npm i
```
    
## Usage/Examples

```
*NOTE: There are preloaded text libraries and a demo in the output.txt.

All data used in the project will be in the data/ folder including the config.json containing the default values.
```

```json
const { SaveGCode, CalculateVectors, ParseString, ConvertDesmosToVectorArray, CleanVectors } = require("./lib/logic");
```



## Function Refference

#### Params for functions

| Function | Param input     | Example |
| :-------- | :------- | :------------------------- |
| `SaveGCode` | `object` | { code: outputGcode, filename: "outputfilename.txt" } |
| `ParseString` | `string` | { yOffset: 2.8, xOffset: 2.77, scale: 0.17, letterSpacing: 0.25, spaceScale: 0.2, } |
| `ConvertDesmosToVectorArray` | `object` | Copied vectors from desmos e.g. (\left(0,0\right),\left(0.5,1\right),\left(1,0\right),\left(0.75,0.5\right),\left(0.25,0.5\right)) |
| `CalculateVectors` | `object` | { points: (3d array from ParseString or other image/data files), OutputText: false, ExludeStartXY0: true } 
|
| `CleanVectors` | `object` | { arrayVectors: [ ...CalculateVectorsArray1, ...CalculateVectorsArray2, ], OutputText: true } |


#### Reference index.js for more precise examples and a demo of all functions



## Authors

- [@mangoz1x](https://www.github.com/mangoz1x)
- [@mangoz1x portfolio] (https://portfolio-mangoz1x.vercel.app)

