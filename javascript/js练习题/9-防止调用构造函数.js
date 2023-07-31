// 使用Instanceof
function foo1(target) {
  if(!(this instanceof foo1)){
    throw new Error("非法创建函数");
  }
}
// foo1(123);

// 使用 new.target
function foo2(target) {
  if(!(new.target)){
    throw new Error("非法创建函数");
  }
}

// foo2(22)

// es6抽象类
// 可以创建子类但不能创建父类
class father{
  constructor(target){
    if(new.target==father){
      throw new Error("非法创建父类");
    }
    this.target = target;
  }
}
class son extends father{
  constructor(target){
    super(123); 
  }
}
new father();

