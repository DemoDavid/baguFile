function MyObjectCreate (obj) {
    function fun(){};
    fun.prototype = obj;
    return new fun();
}

function myNew(fn,...args){
  let obj = MyObjectCreate(fn.prototype);
  let res = fn.apply(obj, args);
  if(res&&(typeof res=='object'||typeof res =='function')){
    return res;
  }
  return obj;
}

function son(data){
  this.data = data;
}

let p = myNew(son,123);
console.log(p.data);