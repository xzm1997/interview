let k = 2;
let arr = [3, 10, 5, 4, 2], rest = [], res;

arr.sort((a,b) => a-b);
rest = arr;


while (true) {
  let sum = rest.reduce((a,b) => a+b);
  if (rest[rest.length-1] < sum/rest.length*k) {
    // res = res < rest.length ? rest.length : res
    res = rest.length
    break;
  } else {
    rest.shift();
  }
}

console.log(res);
