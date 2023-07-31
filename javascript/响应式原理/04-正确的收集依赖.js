class Depend{
  constructor(){
    this.relativeFns = new Set();
    // 储存函数的数组;
  }
  addDepend(relativeFn){
    this.relativeFns.add(relativeFn);
  }
  notify(){
    this.relativeFns.forEach(fn=>{
      fn();
    });
  }
}
//通过修改watchFn函数实现逐个调用;
let globalFn = null;
function watchFn(Fn){
  //depend.addDepend(Fn);
  globalFn = Fn;
  Fn();
  // globalFn = null;
}
// 管理依赖的函数;
let targetMap = new WeakMap();
function getDepend(target,key){
  let map = targetMap.get(target);
  // 从weakmap中获得某个对象的依赖;
  // weakmap---obj1--[name,age]
         // ---obj2--[address];
  if(!map){
    map = new Map();
    targetMap.set(target,map);
    // 如果weakmap中没有这个依赖，就从新设置一个
  }
  let depend = map.get(key);
  if(!depend){
    depend = new Depend();
    map.set(key,depend);
  }
  return depend;
}



const depend = new Depend();
const obj = {
  name:'coderwhy',
  age:23,
  zoom:{bar:[1,2,3]}
};

const proxyObj = new Proxy(obj,{
  set:function(target,key,value,receiver){
    Reflect.set(target,key,value,receiver);
    let depend = getDepend(target, key);
    depend.notify();
  },
  get:function(target,key,receiver){
    let depend = getDepend(target,key);
    depend.addDepend(globalFn);
    return Reflect.get(target,key,receiver)
  }
})


watchFn(function() {
  console.log('你好无敌为');
  // console.log(proxyObj.age);
  // console.log(proxyObj.age);
  // console.log(proxyObj.age);
})

// watchFn(function() {
//   console.log('document');
// })
// proxyObj.name = 'zoom';
// proxyObj.age = 'barry';
// proxyObj.age = '123';
// proxyObj.zoom.bar[0] = 1;

 