let obj1 = {a:1,b:{c:1}}
let obj2 = {...obj1};

console.log(obj1, obj2)

obj2.b.c = 2;

console.log(obj1, obj2)
