var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("input.txt");
readerStream.setEncoding("UTF8");

/*
readerStream.on("data", function(chunk){
	console.log("on data");
	data += chunk;
});
*/

readerStream.on("end", function(){
	console.log("on end");
	console.log(data);
});

readerStream.on("error", function(err){
	console.log("on error");
	console.log(err.stack);
});

console.log("Progress is Over.");

console.log("data:");
console.log(data);

