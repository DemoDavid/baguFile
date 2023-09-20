// 寄生组合式继承

// Object.create 对象找个儿子；
function Father() {
  this.name = "father";
}
Father.prototype.speak = function () {
  console.log(this.name);
};

function Son() {
  Father.call(this);
  this.name = "erzi";
}

function MyObjectCreate(obj) {
  function fun() {}
  fun.prototype = obj;
  return new fun();
}
function extend(father, child) {
  child.prototype = MyObjectCreate(father.prototype);
  child.prototype.constructor = child;
}
extend(Father, Son);
let son = new Son();
son.speak();
console.log(Son.prototype.__proto__);
console.log(Object.getPrototypeOf(son));
