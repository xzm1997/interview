const step = function() {
  let status = 0;
  return function() {
    setTimeout(() => {
      console.log(status);
      status = status ? 0 : 1;
      step();
    }, 1000)
  }
}

step()();
