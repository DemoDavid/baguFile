let relativeFn = [];
// 储存函数的数组;
function watchFn(fn) {
  relativeFn.push(fn);
}

const obj = {
  name:'coderwhy',
  age:23
};

watchFn(function() {
  console.log('你好无敌为');
  console.log(obj.name);
})

watchFn(function() {
  console.log('document');
})


relativeFn.forEach(fn=>{
  fn();
});

