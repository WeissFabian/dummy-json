const {firstNames, lastNames, companies, streets, cities, postalCodes, countries} = require('./ressources/dummy-data')

const Type = {
    String: "string",
    Boolean: "boolean",
    Number: "number",
    Null: "null",
    FirstName: "firstName",
    LastName: "lastName",
    Company: "company",
    Street: "street",
    Streetnumber: "streetNumber",
    City: "city",
    PostalCode: "postalCode",
    Country: "country"
}

function generateCapitalLetter(){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXY'
    let charLength = characters.length;
    return characters[Math.floor(Math.random() * (charLength-1))]
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

function generateInteger(limit){
    if(limit === undefined) limit = 100
    return Math.floor(Math.random()*limit)
}

function generateFirstName(){
    const firstNameSize = firstNames.length;
    return firstNames[Math.floor(Math.random() * (firstNameSize-1))]
}

function generateLastName(){
    const lastNameSize = lastNames.length;
    return lastNames[Math.floor(Math.random() * (lastNameSize-1))]
}

function generateCompany(){
    const companySize = companies.length;
    return companies[Math.floor(Math.random() * (companySize-1))]
}

function generateStreet(){
    const streetSize = streets.length;
    return streets[Math.floor(Math.random() * (streetSize-1))]
}

function generateStreetNumber(includeLetter){
    const streetSize = streets.length
    var streetNumber = generateInteger(300)
    if(includeLetter && generateBoolean()) streetNumber = streetNumber + generateCapitalLetter()
    return streetNumber
}

function generateCity(){
    const citySize = cities.length;
    return cities[Math.floor(Math.random() * (citySize-1))]
}

function generatePostalCode(){
    const postalCodeSize = postalCodes.length;
    return postalCodes[Math.floor(Math.random() * (postalCodeSize-1))]
}

function generateCountry(){
    const countrySize = countries.length;
    return countries[Math.floor(Math.random() * (countrySize-1))]
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
            case Type.FirstName:
                jsonDummy[key] = generateFirstName()
                break;
            case Type.LastName:
                jsonDummy[key] = generateLastName()
                break;
            case Type.Company:
                jsonDummy[key] = generateCompany()
                break;
            case Type.Street:
                jsonDummy[key] = generateStreet()
                break;
            case Type.Streetnumber:
                jsonDummy[key] = generateStreetNumber(jsonDefinition[key]["includeLetter"])
                break;
            case Type.City:
                jsonDummy[key] = generateCity()
                break;
            case Type.PostalCode:
                jsonDummy[key] = generatePostalCode()
                break;
            case Type.Country:
                jsonDummy[key] = generateCountry()
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