function fruits(){
	console.log("I have some fruits, they are:");
	for(var i in arguments){
		console.log(arguments[i]);
	}
}

function execute(func){
	var args = [];
	for(var i in arguments){
		args.push(arguments[i]);
	}
	func.apply(null, args.slice(1));
}

execute(fruits, "apple", "pear", "banana", "orange");

execute(function(arg){
	console.log(arg);
}, "Hello World.");
