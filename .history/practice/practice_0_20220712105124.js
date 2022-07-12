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
  }()
}

const throttle = function(fn, delay) {

}


// Test
debounce(() => {
  console.log(1);
}, 1000);
setTimeout(function() {
  debounce(() => {
    console.log(1);
  }, 1000);
}, 500);