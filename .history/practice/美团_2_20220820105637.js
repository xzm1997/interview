const read_line = require('readline-sync')
let input = read_line.question("")

let numQs, numRev, mark = 0, upList = [];
[numQs, numRev] = input.split(' ')
numQs = parseInt(numQs);
numRev = parseInt(numRev)

let pList = read_line.question("").split(' ').map(item => parseInt(item)/100);
let markList = read_line.question("").split(' ').map(item => parseInt(item));

for (let i = 0; i < numQs; ++i) {
  mark += (pList[i] * markList[i]);
}

for (let i = 0; i < numQs; ++i) {
  let temp = (100 - pList[i]) * markList[i];
  upList.push(temp);
}

upList.sort((a, b) => b - a);
for (let i = 0; i < numRev; ++i) {
  mark += upList[i];
}

console.log((mark/100).toFixed(2))
