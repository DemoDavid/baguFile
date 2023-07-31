// instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可.
function myInstanceOf(left,right){
  let proto = Object.getPrototypeOf(left);
  let prototypeRight = right.prototype;
  while(true){
    if(!proto)return false;
    if(proto==prototypeRight)return true;
    proto = Object.getPrototypeOf(proto); 
  }
}
console.log(myInstanceOf(Map,Set));
