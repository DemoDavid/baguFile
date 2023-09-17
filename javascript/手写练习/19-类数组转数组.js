const FalseArr = {0:'cal',1:'obj',2:'cwd',length:3};

// Array.from
// console.log(Array.from(FalseArr));

//Array原生方法
// let b = Array.prototype.slice.call(FalseArr);
// console.log(b);

// Array.apply(null, arrayLike)
// let c = Array.apply(null, FalseArr);
// console.log(c);

// let d = Array.prototype.concat.apply([], FalseArr);
// console.log(d);

console.log(Object.values(FalseArr));
