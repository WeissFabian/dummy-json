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
You can also add explicit configurations to some Types.
These options are available:
| Type | options name | default-value | example |
| :--- | :---         | :---    | :---  |
| String | length | 10 | "length": 123 |
| Number | limit | 100 | "limit": 200 |
| Integer | limit | 100 | "limit": 200 |
| Boolean | chance | 0.5 | "chance": 0.1 |
| StreetNumber | includeLetter | false | "includeLetter": true|


Example:
```js
let dummyDataConfigExplicit = {
    "stringKey": {"type": Type.String, "length": 123},
    "numberKey": {"type": Type.Number, "limit": 200},
    "integerKey": {"type": Type.Integer, "limit": 200},
    "booleanKey": {"type": Type.Boolean, "chance": 0.1},
    "streetNumberKey": {"type": Type.StreetNumber, "includeLetter": true}
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

# Data Types

## String
Selector: Type.String
>Example output: 'cTaGzkrOFD'

**Options:**
| options name | default-value | example |
| :---         | :---    | :---  |
| length | 10 | "length": 123 |


## Decimal number
Selector: Type.Number
>Example output: 34.969813298829244

**Options:**
| options name | default-value | example |
| :---         | :---    | :---  |
| limit | 10 | "limit": 200 |

## Integer
Selector: Type.Integer
>Example output: 34

**Options:**
| options name | default-value | example |
| :---         | :---    | :---  |
| limit | 10 | "limit": 200 |

## Boolean
Selector: Type.Boolean
>Example output: true

**Options:**
| options name | default-value | example |
| :---         | :---    | :---  |
| chance | 0.5 | "chance": 0.1 |
0.6 = 60% percent chance to get true

## Null
Selector: Type.Null
>Output: null

## FirstName
Selector: Type.FirstName
>Example output: 'Noah'

## LastName
Selector: Type.LastName
>Example output: 'Miller'

## Company
Selector: Type.Company
>Example output: 'Krani'

## Street
Selector: Type.Street
>Example output: 'Industrial Dr'

## Streetnumber
Selector: Type.Streetnumber
>Example output: 125

**Options:**
| options name | default-value | example |
| :---         | :---    | :---  |
| includeLetter | false | "includeLetter": true |
include letters at end of streetnumber

## City
Selector: Type.City
>Example output: 'Miami'

## PostalCode
Selector: Type.PostalCode
>Example output: '16057'
PostalCodes may also end with letters

## Country
Selector: Type.Country
>Example output: 'Sweden'

## Continent
Selector: Type.Continent
>Example output: 'Europe'

