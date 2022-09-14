const read_line = require('readline-sync');

let num = parseInt(read_line.question(""));

for (let i = 0; i < num; ++i) {
  let str = read_line.question("");
  let map = new Map();
  for (let j = 0; j < str.length; ++j) {
    if (map.has(str[j])) {
      let value = map.get(str[j]);
      map.set(str[j], value+1);
    } else {
      map.set(str[j], 1);
    }
  }
  if (map.size === 1) console.log('Yes');
  else if (map.get(1) % 2 === 0 || map.get(0) % 2 === 0) console.log('Yes');
  else console.log('No');
}
