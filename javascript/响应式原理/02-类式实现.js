class Depend{
  constructor(){
    this.relativeFns = [];
    // 储存函数的数组;
  }
  addDepend(relativeFn){
    this.relativeFns.push(relativeFn);
  }
  notify(){
    this.relativeFns.forEach(fn=>{
      fn();
    });
  }
}
function watchFn(Fn){
  depend.addDepend(Fn);
}

const depend = new Depend();
const obj = {
  name:'coderwhy',
  age:23
};

const proxyObj = new Proxy(obj,{
  set:function(target,key,value,receiver){
    Reflect.set(target,key,value,receiver);
    depend.notify();
  },
  get:function(target,key,receiver){
    return Reflect.get(target,key,receiver)
  }
})


watchFn(function() {
  console.log('你好无敌为');
  console.log(proxyObj.name);
})

watchFn(function() {
  console.log('document');
})
proxyObj.name = 'zoom';
proxyObj.name = 'barry';


 