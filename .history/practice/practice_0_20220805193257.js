String.prototype._deal = function () {
  if (this.length <= 10) return this.toString();
}


console.log('abcdefgasdsadas12345'._deal());
console.log('123456'._deal())