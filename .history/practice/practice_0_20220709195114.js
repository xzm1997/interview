const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor (executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    this.resolveList = [];
    this.rejectList = [];

    const resolve = function(value) {
      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        this.resolveList.forEach(callback => {
          callback(value);
        })
      }, 0)
    }
    const reject = function(reason) {
      setTimeout(() => {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectList.forEach(callback => {
          callback(reason);
        })
      }, 0)
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled === 'function') {
      onFulfilled = function(value) {
        return value;
      }
    }
    if (typeof onRejected === 'function') {
      onRejected = function(reason) {
        throw reason;
      }
    }

    if (this.status === PENDING) {
      this.resolveList.push(onFulfilled);
      this.rejectList.push(onRejected);
    }
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {

    }
  }
}
