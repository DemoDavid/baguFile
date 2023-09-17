// let a = Object.assign('abc');
// console.log(Array.from(a));
// Object.assign可以展开字符串。

// 实现Objcet.assign;
function MyObjectAssign(target, ...args) {
  if (target == null) {
    throw new TypeError("传入类型错误");
  }
  let res = Object(target);
  args.forEach((item) => {
    if (item != null) {
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          res[key] = item[key];
        }
      }
    }
  });
  console.log(res);
  return res;
}
MyObjectAssign({}, "abc");
let res = Object.assign({}, "cde");
