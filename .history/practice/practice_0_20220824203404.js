function create(obj) {
  function F(){};
  F.prototype = obj;
  return new F();
}

function myNew(constructor) {
  let newObj = constructor
}
