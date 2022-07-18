function currying(fn) {
  let args = []
  return function temp(...newArgs) {
    if (args.length) {
      args.push(newArgs);
    } else {

    }
  }
}

let add = function(args) {
  args.reduce((prev, cur) => prev+cur);
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15