const read_line = require('readline-sync')
let num = read_line.question("")
let input = read_line.question("")
let k = read_line.question("")

let positions = input.split(' ').map(item => parseInt(item));



console.log(positions);
