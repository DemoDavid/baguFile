function curry(fn,...args){
  let len = fn.length;
  // 获取函数传入参数的个数
  let allArgs = [...args];
  const res = function(...newArgs){
    allArgs = [...allArgs, ...newArgs];
    if(allArgs.length==len){
      return fn(...allArgs);
    }else{
      return res;
    }
  }
  return res;
}
// console.log(curry.length);

const fun = (a,b,c,d,e,f)=>{return a+b+c+d+e+f};
let one = curry(fun);
console.log(one(1)(2)(3)(4)(5)(6))
