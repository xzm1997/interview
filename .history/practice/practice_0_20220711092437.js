function timeWait(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      fn();
      resolve();
    }, time);
  })
}

function mySetTimInterval(fn, time) {
  timeWait(fn, time)
    .then(() => mySetTimInterval(fn, time));
}


mySetTimInterval(() => {
  console.log('1')
},1000);