const read_line = require('readline-sync')
let num = read_line.question("")
let input = read_line.question("")
let k = read_line.question("")

let positions = input.split(' ').map(item => parseInt(item));

positions.push(0);
positions.sort((a, b) => a - b);

let index = positions.indexOf(0);

console.log(positions);
