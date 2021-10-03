buf1 = new Buffer(256);

buf1.write("hello world");

// console.log(buf1);
console.log("buf1 > ", buf1.toString())

buf2 = new Buffer(256);

buf2.write("!!!!!");

// console.log(buf1);
console.log("buf2 > ", buf2.toString())

var buff3 = Buffer.concat([buf1,buf2]);
console.log(buff3.toString())

