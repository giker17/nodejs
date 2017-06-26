
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connect', connectHandler);
eventEmitter.on('data_received', function(){
	console.log('data received.');
});

function connectHandler(){
	console.log('connect success.');
	
	// trigger data_received event
	eventEmitter.emit('data_received');
}

eventEmitter.emit('connect');

console.log('process ended.');

////
var fs = require('fs');
fs.readFile('input.txt', function(err, data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});


