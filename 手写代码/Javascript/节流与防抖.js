const debounce = function(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

const throttle = function(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay)
    }
  }
}

// Test debounce
let fnDebounce = debounce(() => {
  console.log(1);
}, 1000);
fnDebounce();
setTimeout(() => {
  fnDebounce();
}, 500);

// Test throttle
let fnThrottle = throttle(() => {
  console.log(2);
}, 1000);
fnThrottle();
setTimeout(() => {
  fnThrottle();
}, 500);
