
var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();

eventEmitter.on('newListener', function(evt, listener){
	console.log('new listener: ' + evt);
});
eventEmitter.on('removeListener', function(evt, listener){
	console.log('remove listener: ' + evt);
});

eventEmitter.addListener('evt1', function(){
	console.log('This is listener evt1.');
});
eventEmitter.addListener('evt2', function(arg1){
	console.log('This is listener evt2.');
	console.log(arg1);
});

eventEmitter.on('evt1', function(){
	console.log('This is on on1.');
});
eventEmitter.on('evt2', onEvt2);
function onEvt2(arg1){
	console.log('This is on evt2.');
	console.log(arg1);
}

eventEmitter.once('once1', function(arg1){
	console.log('This is once1.');
	console.log(arg1);
});

console.log('evt1');
console.log(EventEmitter.listenerCount(eventEmitter, 'evt1'));
console.log(eventEmitter.listeners('evt1'));

eventEmitter.removeListener('evt1',eventEmitter.listeners('evt1')[0]);

console.log(EventEmitter.listenerCount(eventEmitter, 'evt1'));
console.log(eventEmitter.listeners('evt1'));

////////
console.log('----------------------------');
console.log('evt2');

console.log(EventEmitter.listenerCount(eventEmitter, 'evt2'));
console.log(eventEmitter.listeners('evt2'));

eventEmitter.removeListener('evt2', onEvt2);

console.log(EventEmitter.listenerCount(eventEmitter, 'evt2'));
console.log(eventEmitter.listeners('evt2'));

////////
console.log('----------------------------');
console.log('once');

console.log(eventEmitter.listeners('once1')[0]);
for(arg in eventEmitter.listeners('once1')[0]){
	console.log(arg);
}

eventEmitter.listeners('once1')[0]['listener']('arg of once1');

