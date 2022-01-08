const Type = {
    String: "string",
    Boolean: "boolean",
    Number: "number",
    Null: "null"
}

function generateString(stringLength){
    if(stringLength === undefined) stringLength = 10
    let randomString = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charLength = characters.length;
    for ( var i = 0; i < stringLength; i++ ) {
        randomString += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return randomString
}

function generateBoolean(chance){
    if(chance === undefined) chance = 0.5
    return (Math.random() < chance)
}

function generateNumber(limit){
    if(limit === undefined) limit = 100
    return Math.random()*limit
}

function generateJSONDummy(jsonDefinition){
    var jsonDummy = {}
    for(key in jsonDefinition){
        switch (jsonDefinition[key]["type"]){
            case Type.String: 
                jsonDummy[key] = generateString(jsonDefinition[key]["length"])
                break;
            case Type.Number:
                jsonDummy[key] = generateNumber(jsonDefinition[key]["limit"])
                break;
            case Type.Boolean:
                jsonDummy[key] = generateBoolean(jsonDefinition[key]["chance"])
                break;
            case Type.Null:
                jsonDummy[key] = null
                break;
            default:
                jsonDummy[key] = undefined;
        }
    }
    return jsonDummy
}

function generateJSONDummyArray(jsonDefinition, numberOfEntries){
    if(numberOfEntries === undefined) {
        numberOfEntries = 1
    }
    dummmyJSONArray = []
    for(arrayIdx = 0; arrayIdx < numberOfEntries; arrayIdx++){
        dummmyJSONArray[arrayIdx] = generateJSONDummy(jsonDefinition)
    }
    return dummmyJSONArray
}

/* function generateJSONDummyFile(jsonDefinition, numberOfEntries, filePath){
    
} */

module.exports = {
    Type,
    generateJSONDummy,
    generateJSONDummyArray
}