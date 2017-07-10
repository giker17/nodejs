
var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route){
	http.createServer(function(request, response){
		var requrl = url.parse(request.url);
		var pathname = requrl.pathname;
		console.log("Request:" + pathname);

		route(pathname);

		var query = requrl.query;
		var params = querystring.parse(query);
		for(var name in params){
			console.log("value of " + name + " is " + params[name]);
		}

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World\n');
	}).listen(8082);
	console.log("Server started.");
}

exports.start = start;
