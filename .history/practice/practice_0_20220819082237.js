Array.prototype._forEach = function(fn) {
  for (let i = 0; i < this.length; ++i) {
    fn(this[i], i, this);
  }
}

Array.prototype._map = function(fn) {
  let res = [];
  for (let i = 0; i < this.length; ++i) {
    let temp = fn(this[i], i, this);;
    res.push(temp);
  }
  return res;
}

Array.prototype._filter = function(fn) {
  let res = [];
  for (let i = 0; i < this.length; ++i) {
    let temp = fn(this[i], i, this);
    if (temp) {
      res.push(this[i]);
    }
  }
  return res;
}

Array.prototype._find = function(fn) {
  for (let i = 0; i < this.length; ++i) {
    if (fn(this[i], i, this)) {
      return this[i];
    }
  }
}

Array.prototype._every = function(fn) {
  for (let i = 0; i < this.length; ++i) {
    if (fn.apply(this[i]))
  }
  return true;
}

Array.prototype._some = function(fn) {

}