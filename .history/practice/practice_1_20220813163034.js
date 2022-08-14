const throttle = function(fn, wait) {
  let timer = null;
  let first = true;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        if (!first) {
          fn.apply(context, args);
        }
        timer = null;
        first = true;
      }, wait)
    }
    if (first) {
      fn.apply(context, args);
      first = false;
    }
  }
}
