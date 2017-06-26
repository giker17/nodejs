console.info("Hello Wrold!");
console.log("Hello Wrold!");
console.warn("Hello Wrold!");


var http = require('http'); //load http module
var port = 8889;
// create a http server
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	response.end('Hello World\n');
	
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);



