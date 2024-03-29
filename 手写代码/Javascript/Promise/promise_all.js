Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw 'TypeError';
    }
  
    let count = 0, res = [];
    for (const p of promises) {
      Promise.resolve(p).then(value => {
        ++count;
        res.push(value);
        if (count === promises.length) {
          return resolve(res);
        }
      }, reason => {
        return reject(reason);
      })
    }
  })
}

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.myAll([promise1, promise2]).then(function(value) {
console.log(value);
});
