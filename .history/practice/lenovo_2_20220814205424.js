const read_line = require('readline-sync')
let gameNum = read_line.question("")

for (let i = 0; i < gameNum; ++i) {
  let aliceInput = read_line.question("").split(' ').map(item => parseInt(item));
  let bobInput = aliceInput.splice(3,3);
  
  let aliceElement = [], bobElement = [];
  let aliceCount = [], bobCount = [];

  for (let i = 0; i < 3; ++i) {
    aliceIndex = aliceElement.indexOf(aliceInput[i]);
    bobIndex = bobElement.indexOf(bobInput[i]);
    if (aliceIndex === -1) {
      aliceElement.push(aliceInput[i]);
      aliceCount.push(1);
    } else {
      aliceCount[aliceIndex] += 1;
    }

    if (bobIndex === -1) {
      bobElement.push(bobInput[i]);
      bobCount.push(1);
    } else {
      bobCount[bobIndex] += 1;
    }
  }
}