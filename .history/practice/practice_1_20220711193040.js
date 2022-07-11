const step = (fn, time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    fn();
  }, time)
})


const run = async function(fn, time, num) {
  step(fn, time);
  while (num > 1) {
    await step(fn, time);
  }
}
