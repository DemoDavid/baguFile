// function muIterator(arr){
//   let index = 0;
//   return {
//     next:function(){
//       if(index<arr.length){
//         return {value:arr[index++],done:false};
//       }else{
//         return {value:void 0,done:true};
//       }
//     }
//   }
// }

// let my = muIterator(['a','b','c','d','e','f']);
// let res = my.next();
// while (!res.done) {
//   console.log(res.value); // 1 3 5 7 9
//   res = my.next();
//  }

// function* generator(arr){
//   let index = 0;
//   while(index++<arr.length){
//     yield arr[index];
//   }
// }
// let b = generator(['a','b','c','d','e','f']);
// let res = b.next();
// while(!res.done){
//   console.log(res);
//   res = b.next();
// }
// var myIterable = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

// for (let value of myIterable) {
//     console.log(value);
// }

// const iteratorObj = {
//   name:[1,2,3,4],
//   [Symbol.iterator](){
//     let index = 0;
//     return {
//       next:()=>{
//         if(index<this.name.length){
//           return {done:false, value:this.name[index++]};
//         }else{
//           return {done:true, value:void 0};
//         }
//       }
//     }
//   }
// }
// const iterator = iteratorObj[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for(let obj of iteratorObj){
//   console.log(obj);
// }

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// let a = set[Symbol.iterator]();
// console.log(a.next());console.log(a.next());console.log(a.next());console.log(a.next());

// function* foo(){
//   console.log('函数开始执行');
//   const value1 = 1000;
//   console.log('第一段代码',value1);
//   const n = yield value1;
  
//   const value2 = value1 + n;
//   console.log('第二段代码',value2);
//   yield value2;

// }
// const generator = foo();
// console.log(generator.next(10));
// console.log(generator.next(10));
// console.log(generator.next(10));

// function* gerter(arr){
  // for(let a in arr){
  //   yield a;
  // }
//   yield*arr;
// }
// const iter = gerter([1,2,3,4]);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function *foo(x){
//   let b = yield (x+1);
//   console.log(b);
//   let c = yield b;
//   console.log(c);
//   return 123;
// }

// let g = foo(2);
// console.log(g.next());
// console.log(g.next(2));

// function *orc(obj){
//   let Ref = Reflect.ownKeys(obj);
//   for(let jian of Ref){
//     yield [jian,obj[jian]];
//   }
// }

// let obj = {
//   zoom:'allen',
//   barry:'jack',
//   tomas:'ack',
//   end:'city'
// }
// let o = orc(obj);
// for(let item of o){
//   console.log(item);
// }

