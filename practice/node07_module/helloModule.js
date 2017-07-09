function HelloModule(){
	var name;
	this.setName = function(name){
		this.name = name;
	};
	this.sayHello = function(){
		console.log("Hello " + this.name);
	};
}
HelloModule.hello0 = function(){
	console.log("This is hello0.");
}

module.exports = HelloModule;

HelloModule.hello1 = function(){
	console.log("This is hello1.");
}

module.exports.hello2 = function(){
	console.log("This is hello2.");
}
