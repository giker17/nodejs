
var hello = require("./hello");

hello.world();


var HelloModule = require("./helloModule");
var h = new HelloModule();
h.setName("Tom");
h.sayHello();

HelloModule.hello0();
HelloModule.hello1();
HelloModule.hello2();

