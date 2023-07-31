// 原型链继承
// function Parent(){
//     this.name = 'baba';
//     this.arr = [1,2,3,4];
// }
// function Child(){
//     this.age = 14;
// }

// Child.prototype = new Parent();

// let child = new Child();
// console.log(child.name);
// 缺陷，共用原型链;

// 构造函数继承(盗用构造函数)
// function Parent(){
//     this.name = 'baba';
//     this.arr = [1,2,3,4];
// }
// function Child(){
    // new的步骤，1、创建新的内存空间。2、将函数的prototype赋予对象的proto。
    // 3、将函数內部this赋予给新对象。4、执行函数、5、看看return没，return了就返回return的值，否则返回新对象
//     Parent.call(this);
//     this.age = 14;
// }
// let b = new Child();
// console.log(b);
// 缺点：无发使用父类原型上的方法；

// 组合继承
// function Parent(){
//     this.name = 'baba';
//     this.arr = [1,2,3,4];
//     console.log('i am father');
// }
// function Child(){
//     Parent.call(this);
//     this.age = 14;
//     console.log('i am son');
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
// let b = new Child();
// 手动将原型上的constructor属性赋给child构造函数
// 缺点，会调用两次父类构造函数;

// Object.create = function(obj){
//  fun(){};
//  fun.prototype = obj;
//  return new fun();
// }


// 原型式继承
// function Parent(){
//     this.name = 'baba';
//     this.arr = [1,2,3,4];
// }
// let child = Object.create(new Parent());
// console.log(child.name);
// 缺点，共用原型,浅拷贝

// 寄生式继承
// 差不多,只不过把给对象添加属性放在了函数里面
// 缺点同上

// 寄生组合式继承
// function Parent(){
//     this.name = 'baba';
//     this.arr = [1,2,3,4];
// }
// Parent.prototype.getName = function(){
//     return this.name;
// }
// function Child(){
//     Parent.call(this);
//     // 这样可以使用父类的属性和方法
//     this.age = 123;
// }

// function clone(child,parent){
//     child.prototype = Object.create(parent.prototype);
//     // 这样就可以使用父类原型上的方法了;
//     child.prototype.constructor = child;
//     // 手动将原型的constructor设为子类构造函数;
// }
// clone(Child,Parent);
// let son = new Child();
// console.log(son.getName());



function father(){
    this.name = 'baba';
    this.age = 70;
}

father.prototype.speak  = function(){
    console.log('我是爸爸');
    return 'hahah'
}

function son(){
    father.call(this);
    this.name = 'erzi';
    this.age = 12;
}

function cloneExtend(father,son){
    son.prototype = Object.create(father.prototype);
    son.prototype.constructor = son;
}
cloneExtend(father,son);
let soner = new son();
console.log(soner.speak());