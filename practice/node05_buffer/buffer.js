// 二进制数据的处理，比如文件流，TCP流

var buf1 = new Buffer(10);
var buf2 = new Buffer([10,11,12,13,14]);
var buf3 = new Buffer("abcdefg", "utf-8");
var buf4 = new Buffer(20);
buf4.write("www.runoob.com");

console.log("buf2:"+buf2.toString()+"|end");
console.log("buf4:"+buf4.toString()+"|end");

console.info(buf4.length);

console.log(buf2);
console.log("buf2 json:");
console.log(buf2.toJSON(buf2));

console.log("buf4 json:");
console.log(buf4.toJSON(buf4));

var buf5 = Buffer.concat([buf3, buf4]);
console.log("buf5:"+buf5.toString());

var cmpr = buf4.compare(buf5);
console.log(cmpr);

buf3.copy(buf4);
console.log(buf4.toString());


