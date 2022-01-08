# dummy-json-js
## Description
This is a npm package to create json dummy data.

## How to use
### Import module
First import the module.
```js
const {Type, generateJSONDummy, generateJSONDummyArray} = require("dummy-json-js")
```

### Define format
To generate json dummy data you need to define the format the data should be. The format contains of the key you want to name the entry, as well as the type of data.
```js
let dummyDataConfig = {
    "stringKey": {"type": Type.String},
    "numberKey": {"type": Type.Number},
    "booleanKey": {"type": Type.Boolean},
    "nullKey": {"type": Type.Null}
}
```
You can also add explicit configurations to each Type.
These options are available:
| Type | options name | default-value | example |
| :--- | :---         | :---    | :---  |
| String | length | 10 | "length": 123 |
| Number | limit | 100 | "limit": 200 |
| Boolean | chance | 0.5 | "chance": 0.1 |

Example:
```js
let dummyDataConfigExplicit = {
    "stringKey": {"type": Type.String, "length": 123},
    "numberKey": {"type": Type.Number, "limit": 200},
    "booleanKey": {"type": Type.Boolean, "chance": 0.1},
    "nullKey": {"type": Type.Null}
}
```

### Generate a single json object
To generate a single object use the function generateJSONDummy, and parse the data config object.
```js
const {Type, generateJSONDummy} = require("dummy-json-js")

let dummyDataConfigExplicit = {
    "stringKey": {"type": Type.String, "length": 123},
    "numberKey": {"type": Type.Number, "limit": 200},
    "booleanKey": {"type": Type.Boolean, "chance": 0.1},
    "nullKey": {"type": Type.Null}
}

dummyData = generateJSONDummy(dummyDataConfigExplicit)
```

### Generate a array of json objects
To generate a array of json objects use the function generateJSONDummyArray, and parse the data config object.
You can also parse the number of elements the array should contain, default is 2.
```js
const {Type, generateJSONDummyArray} = require("dummy-json-js")

let dummyDataConfigExplicit = {
    "stringKey": {"type": Type.String, "length": 123},
    "numberKey": {"type": Type.Number, "limit": 200},
    "booleanKey": {"type": Type.Boolean, "chance": 0.1},
    "nullKey": {"type": Type.Null}
}

dummyDataArray = generateJSONDummyArray(dummyDataConfigExplicit)
```