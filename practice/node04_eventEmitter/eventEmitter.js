
var eventEmitter = new (require('events').EventEmitter)();

eventEmitter.on('evt', function(arg1){
	console.log('evt event triggered.');
	console.log(arg1);
});

setTimeout(function(){
	console.log(new Date());
	eventEmitter.emit('evt', 'argument 1');
},1000);



