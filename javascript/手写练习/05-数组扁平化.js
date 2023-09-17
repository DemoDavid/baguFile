/**
 * @arr 多重数组
 * */
let res = [2, 1, 2, [2, 4, [2, 4, 4, [1]]]];

function flatter(arr) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrRes.push(...flatter(arr[i]));
    } else {
      arrRes.push(arr[i]);
    }
  }
  return arrRes;
}
// String+split;
console.log(String(res).split(",").map(Number));

// 高阶方法
// reduce+concat
function flatter2(arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flatter(next) : next);
  }, []);
}

// console.log(flatter2(res))
function flatDeep(arr) {
  return arr.flat(Infinity);
}
