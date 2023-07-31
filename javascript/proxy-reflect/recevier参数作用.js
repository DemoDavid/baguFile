const obj = {
  _name : 'cobe',
  get name(){
    console.log('函数get请求');
    return this._name;
  },
  set name(value){
    console.log('函数set请求');
    this._name = value;
  }
};
const objProxy = new Proxy(obj,{
  get:function(target, key, receiver){
    console.log('代理函数get了');
    return Reflect.get(target,key,receiver);
  },
  set:function(target, key, value,receiver){
    console.log('代理函数set了');
    Reflect.set(target,key,value);
  }
});
console.log(objProxy.name);