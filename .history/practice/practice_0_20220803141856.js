function currying(fn) {
  let args = [];
  return function Fn(...newArgs) {
    if (arguments.length !== 0) {
      args.concat();
      return Fn;
    } else {
      let res = fn(args);
      args = [];
      return res;
    }
  }
}

function add(...arr) {
  return arr.reduce((a, b) => a + b);
}


const curryAdd = currying(add);
console.log(curryAdd(1,2,3)(4,5)());
console.log(curryAdd(1)(2)(3,4,5)());