Array.prototype.map = function (fn) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    res[i] = fn(arr[i], i, arr);
  }
  return res;
}