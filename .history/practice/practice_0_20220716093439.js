Promise.myAll = function(promises) {
  if (!Array.isArray(Promises)) {
    throw 'TypeError';
  }

  let count = 0, res = [];
  for (const p of promises) {
    Promise.resolve(p).then(value => {

    }, reason => {
      
    })
  }
}