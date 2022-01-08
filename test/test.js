const {Type, generateJSONDummy, generateJSONDummyArray} = require("dummy-json-js")

let dummyDataExplicit = {
    "String": {"type": Type.String, "length": 30},
    "Boolean": {"type": Type.Boolean, "chance" : 0.1},
    "Number": {"type": Type.Number, "limit": 3000},
    "Null": {"type": Type.Null}
}

let dummyData = {
    "String": {"type": Type.String},
    "Boolean": {"type": Type.Boolean},
    "Number": {"type": Type.Number},
    "Null": {"type": Type.Null}
}

console.log(generateJSONDummyArray(dummyDataExplicit, 3))
console.log(generateJSONDummyArray(dummyData, 3))