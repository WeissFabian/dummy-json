const {Type, generateJSONDummy, generateJSONDummyArray} = require("dummy-json-js")

let dummyDataExplicit = {
    "String": {"type": Type.String, "length": 30},
    "Boolean": {"type": Type.Boolean, "chance" : 0.1},
    "Number": {"type": Type.Number, "limit": 3000},
    "Null": {"type": Type.Null},
    "FirstName": {"type": Type.FirstName},
    "LastName": {"type": Type.LastName},
    "Company": {"type": Type.Company},
    "Street": {"type": Type.Street},
    "Streetnumber": {"type": Type.Streetnumber, "includeLetter": true},
    "City": {"type": Type.City},
    "PostalCode": {"type": Type.PostalCode},
    "Country": {"type": Type.Country}
}

let dummyData = {
    "String": {"type": Type.String},
    "Boolean": {"type": Type.Boolean},
    "Number": {"type": Type.Number},
    "Null": {"type": Type.Null},
    "FirstName": {"type": Type.FirstName},
    "LastName": {"type": Type.LastName},
    "Company": {"type": Type.Company},
    "Street": {"type": Type.Street},
    "Streetnumber": {"type": Type.Streetnumber},
    "City": {"type": Type.City},
    "PostalCode": {"type": Type.PostalCode},
    "Country": {"type": Type.Country}
}

console.log(generateJSONDummyArray(dummyDataExplicit, 3))
console.log(generateJSONDummyArray(dummyData, 3))