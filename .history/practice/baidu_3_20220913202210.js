const read_line = require('readline-sync');

let num = parseInt(read_line.question(''));
let arr = read_line.question('').split(' ').map(item => parseInt(item));

let res = arr.reduce((a,b) => a+b);
console.log(res);
