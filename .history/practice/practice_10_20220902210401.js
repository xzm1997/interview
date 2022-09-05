const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.result = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = function(value) {
      this.status = FULFILLED;
      this.result = value;

      setTimeout(() => {
        this.resolveList.forEach(callback => {
          callback(value);
        })
      })
    }

    const reject = function(reason) {
      this.status = REJECTED;
      this.result = reason;
      setTimeout(() => {
        this.rejectList.forEach(callback => {
          callback(reason);
        })
      })
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then (onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function(value) {
        return value;
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = function(reason) {
        throw reason;
      }
    }

    const callback = function(type) {
      let res = type(this.result);
      if (res instanceof Promise) {

      } else {
        
      }
    }
  }

  finally (onSettled) {

  }

  all (promises) {

  }

  allSettled(promises) {

  }

  race (promises) {

  }

  resolve(value) {

  }
  reject(reason) {

  }
}
