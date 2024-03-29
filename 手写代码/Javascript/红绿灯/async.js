let stepAsync = (color, time) => new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log(color)
    resolve();
  }, time)
})

const runAsync = async () => {
  await stepAsync('red', 1000)
  await stepAsync('yellow', 2000)
  await stepAsync('green', 3000)
  runAsync()
}

runAsync();
