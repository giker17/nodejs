
var printDt = function(callback, num){
	if(Object.prototype.toString.call(num).slice(8,-1) !== 'Number'
		&& !new RegExp(/^\d+$/).test(num.toString())){
		console.error(num + " is not a number!");
		return;
	}
	callback(num);
	if(num > 0){
		setTimeout(printDt, 1000, callback, --num);
	}
}

printDt(function(num){
	console.log(new Date());
	console.log(num);
},3);

printDt(function(num){
	console.log(new Date());
	console.log(num);
},'4');

