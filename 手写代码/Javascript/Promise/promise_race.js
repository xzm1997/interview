Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) throw 'TypeError';
    for (const p of promises) {
      Promise.resolve(p).then(value => {
        return resolve(value);
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

Promise.myRace([promise1, promise2]).then(function(value) {
  console.log(value);
});
