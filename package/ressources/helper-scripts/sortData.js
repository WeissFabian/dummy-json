const dummyData = require("../dummy-data.js")


console.log(dummyData.firstNames)
console.log(dummyData.lastNames)

// remove duplicates
fistNames = [...new Set(dummyData.firstNames)];
fistNames.sort()
lastNames = [...new Set(dummyData.lastNames)];
lastNames.sort()

var fs = require('fs');

var file = fs.createWriteStream('fistNames.txt');
file.on('error', function(err) { /* error handling */ });
fistNames.forEach(function(name) { file.write('\'' + name+ '\',\n'); });
file.end();

var file = fs.createWriteStream('lastNames.txt');
file.on('error', function(err) { /* error handling */ });
lastNames.forEach(function(name) { file.write('\'' + name+ '\',\n'); });
file.end();