var label;
console.time(label);

console.log(__filename);
console.log(__dirname);

var time = console.timeEnd(label);

console.log(time);

console.trace("trace");
