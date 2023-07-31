// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i)
//   }, i * 1000)
// }
// for (var i = 1; i <= 5; i++) {
//   ;(function(j) {
//     setTimeout(function timer() {
//       console.log(j)
//     }, j * 1000)
//   })(i)
// }
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i)
//   }, i * 1000)
// }

const onceFun = (fn)=>{
  let flag = false;
  return function(){
    if(!flag){
      // fn.apply(this,fn);
      fn();
    }else{
      console.log('函数已使用');
    }
    flag = true;
  }
}

function david(){
  console.log('wudi');
}
let newFn = onceFun(david);
newFn();
newFn();