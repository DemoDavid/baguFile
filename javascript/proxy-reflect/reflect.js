let obj = {name:'david',age:100};
let proxyObj = new Proxy(obj,{
  set:function(target,key,value){
    const res = Reflect.set(target,key,value);
    console.log(res)
    if(res){
      console.log('设置成功');
    }else{
      console.log('fail')
    }
  },
  get:function(target,key){
    // console.log('获取函数被指行');
    // return target[key];
    return Reflect.get(target,key);
  }
});
proxyObj.name = 'cherry';
console.log(proxyObj.name);
console.log(obj.name);