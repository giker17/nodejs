var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data);
console.log(data.toString());

console.log('progress done!');