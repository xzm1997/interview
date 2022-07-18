const taskRestrict = async function (limit, tasks, fn) {

}

const timeWait = function (wait) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(wait)
    }, wait)
  })
}

const main = async function () {
  let tasks = [1000, 500, 1001, 400, 1002, 1003, 1004, 1005];
  let res = await taskRestrict(2, tasks, timeWait);
}

main();