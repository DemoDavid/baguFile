const obj = {
  0:'abc',
  1:'fck',
  length:2
};
// 类数组转数组
// let res = Array.prototype.slice.call(obj);

let res = Array.from(obj);

console.log(res);

// argument对象
function foo(name, age, sex) {
  console.log(Object.getOwnPropertyDescriptors(arguments));
  arguments.callee();
}

foo('name', 'age', 'sex')

