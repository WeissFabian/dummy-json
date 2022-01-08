const dummyJson = require("dummy-json")

let dummyData = {
    "String": {"type": dummyJson.Type.String, "length": 30},
    "Boolean": {"type": dummyJson.Type.Boolean},
    "Number": {"type": dummyJson.Type.Number},
    "Null": {"type": dummyJson.Type.Null}
}

console.log(dummyJson.generateJSONDummyArray(dummyData, 3))