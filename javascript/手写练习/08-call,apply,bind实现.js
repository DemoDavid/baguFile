// call函数
/**
 * @target 绑定的this现象
 * @args 传入的参数
 */
Function.prototype.myCall = function(target,...args){
  target = target||global;
  const SymbolKey = Symbol();
  target[SymbolKey] = this;
  console.log(this);
  const res = target[SymbolKey](...args);
  delete target[SymbolKey];
  return res
  // 相当于把函数放入了对象里，调用的时候按作用域寻找。
}

function test(arg){
  console.log(this.speak,arg);
}
test.myCall({speak:123},1234)

Function.prototype.bind = function(target,...Outargs){
  target = target||{};
  const SymbolKey = Symbol();
  target[SymbolKey] = this;
  return function(...innerargs){
    let res = target[SymbolKey](...Outargs,...innerargs);
    return res;
  }
}
let newFun = test.bind({speak:'biilbili'});
newFun(123);