// function test(temp,mode){
//   console.log(arguments)
// }
test(123,214);
// 将argument转为数组

// 方法一
function test(temp,mode){
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}

// 方法二
function test(temp,mode){
  let arr = Array.from(arguments);
  console.log(arr);
}
// 方法三
function test(...args){
  let arr = args;
  console.log(arr);
}