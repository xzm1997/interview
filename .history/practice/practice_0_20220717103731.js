const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = function(value) {
      setTimeout(() => {
        
      }, 0)
    }
    const reject = function(reason) {}

    try {} catch(err) {}
  }

  then(onFulFilled, onRejected) {}
  all(promises) {}
  race(promises) {}
}