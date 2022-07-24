const currying = async function(fn) {
  let args = [];
  return function temp (...newArgs) {
    if (newArgs.length) {
      args = args.concat(newArgs);
    } else {

    }
  }
}

const add = function(...args) {
  return args.reduce((a, b) => a + b);
}


let fn = currying(add);
console.log(fn(1)(2,3,4)(5)());
console.log(fn(1)(2)(3,4,5)());
console.log(fn(1)(2)(3)(4)(5)());
