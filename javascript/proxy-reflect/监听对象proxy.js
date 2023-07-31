let obj = {name:'david',age:100};
let proxyObj = new Proxy(obj,{
  set:function(target,key,value){
    console.log('设置函数被执行');
    target[key] = value;
  },
  get:function(target,key){
    console.log('获取函数被指行');
    return target[key];
  }
});
proxyObj.name = 'cherry';
console.log(proxyObj.name);
console.log(obj.name);