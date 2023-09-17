function _new(ctor, ...args) {
  if (typeof ctor !== "function") {
    throw "ctor must be a function";
  }
  // 创建新的对象
  let newObj = new Object();
  // 让新创建的对象可以访问构造函数原型（constructor.prototype）所在原型链上的属性；
  newObj.__proto__ = Object.create(ctor.prototype);
  // 将构造函数的作用域赋给新对象（this指向新对象）；
  // 执行构造函数中的代码
  let res = ctor.apply(newObj, [...args]);

  let isObject = typeof res === "object" && res !== null;
  let isFunction = typeof res === "function";
  return isObject || isFunction ? res : newObj;
}
