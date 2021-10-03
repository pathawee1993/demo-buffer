console.log("start > ", process.memoryUsage())

buff1 = new Buffer(256);
buff1.write("hello world");
console.log("buf1 > ", buff1.toString())

buff2 = new Buffer(256);
buff2.write("!!!!!");
console.log("buff2 > ", buff2.toString())

var buff3 = Buffer.concat([buff1,buff2]);
console.log("buff3 > ", buff3.toString())

var buff4 = new Buffer(512);
buff3.copy(buff4);
console.log("buff4 > ", buff4.toString())
console.log("created buffer > ", process.memoryUsage())

var myString = "adasdasdasdasdasdasdasdsasdasdsaasdasdasdadasdasdasdasdasdasdasdsasdasdsaasdasdasdadasdasdasdasdasdasdasdsasdasdsaasdasdasdadasdasdasdasdasdasdasdsasdasdsaasdasdasd"
console.log("created string > ", process.memoryUsage())

