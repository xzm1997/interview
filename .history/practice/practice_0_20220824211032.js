class myPromise {
  constructor(executor) {

  }
  
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {

    }
    if (typeof onRejected !== 'function') {

    }

    return new Promise((resolve, reject) => {
      const callback = function(type) {
        let res = type(this.result);
        if (res instanceof Promise) {
          res.then(v => {
            resolve(v);
          }, r => {
            reject(r);
          })
        } else {
          resolve(res);
        }
      }
    })
  }
}
