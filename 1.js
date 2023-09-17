// function* filed() {
//   let num = yield fuck(1);
//   let num2 = yield fuck(num);
// }
// function fuck(num) {
//   console.log(num);
//   return 4444;
// }
// let res = filed();
// res.next(33);
// res.next(44);
function fn1() {
  console.log(222, a);
}
function fn2() {
  var a = 3;
  console.log(111, this.a + a);
  fn1();
}
var a = 2;
var obj = { value: 1 };
function fn3(o) {
  o = 0;
  console.log(o);
}
fn2();
fn2.call({ a: 4 });
fn3(obj);
console.log(obj);
