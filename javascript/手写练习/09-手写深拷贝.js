let reg = /\[object (\w+)\]/;
const checkType = (target)=>{ return Object.prototype.toString.call(target).replace(reg,'$1').toLowerCase();};
// console.log(checkType());
function DeepClone(target,hash=new WeakMap()){
  let res;
  if(checkType(target)=='object'){
    res = {};
  }else if(checkType(target)=='array'){
    res = [];
  }else{
    return target;
  }
  if(hash.has(target))return target;
  hash.set(target,'object');
  for(let key in target){
    if(checkType(target[key])=='object'||checkType(target[key])=='array'){
      res[key] = DeepClone(target[key],hash);
    }else{
      res[key] = target[key];
    }
  }
  return res;
}
let obj = ['a','b',{c:function(){},d:{b:[1,2,3]}}];
let newValue = DeepClone(obj);
newValue[2].c = 123;
console.log(newValue,obj);