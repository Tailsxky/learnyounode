var fs = require('fs');


var buff = fs.readFileSync('io.txt');

var str = buff.toString();

var strSplit = str.split('\n');

console.log(strSplit.length-1);
