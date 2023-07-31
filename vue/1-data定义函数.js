function Component(){
  this.data =new data();
}
function data(){
  return {
    count:1
  }
}
let a = new Component();
let b = new Component();
console.log(a,b);
// 函数返回的对象内存地址并不相同