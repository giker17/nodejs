var fs = require("fs");
var data = "菜鸟教程官网地址： www.runoob.com";

var writeStream = fs.createWriteStream("output.txt");
writeStream.write(data, "UTF8");


