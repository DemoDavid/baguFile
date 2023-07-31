// setTimeout()
// console.log(111);

// new Promise((resolve, reject)=>{
//   console.log('first')
//   resolve();
// }).then(function(){
//   console.log('then 函数');
// })
// process.nextTick(()=>{
//   console.log('nexttick1');
// })

// let p = new Promise((resolve, reject)=>{
//   setTimeout(resolve, 3000);
// })
// console.log(p);
// setTimeout(()=>{console.log(p)},5000)
// let p = Promise.reject(3);
// setTimeout(console.log,0,p);

// let promise = new Promise((resolve, reject)=>{resolve(123)});
let promise = new Promise((resolve, reject)=>{reject(123)});
// promise.then(res=>{console.log(res)});
promise.then(res=>{return 123},err=>{return 3334445}).then(res=>{console.log(res)})
// promise.then(res=>{return new Promise((resolve, reject)=>{reject(123)})}).then
// (res=>{console.log('res'+res)},err=>{console.log('err'+err)});

// let promise = new Promise((resolve, reject)=>{
  // throw new Error('ssdaa');
  // resolve(123)
  // reject(123);
// });
// promise.then(null,(res)=>{console.log(res,',,,')});
// promise.then((res)=>{return new Promise((resolve, reject)=>{reject(456)})}).catch(err=>{console.log(err)});
// promise.catch(err=>{console.log(err)});

// const test = Promise.resolve(new Promise((resolve, reject)=>{reject(123)}));
// test.then(res=>console.log(res)).catch(err=>{console.log('err'+err)})

// const p1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('peichenglin');
//   },500);
// })
// const p2 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('qianduanren');
//   },1000);
// })
// const p3 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     reject('gougouning');
//   },3100);
// })

// Promise.race([p1,p2,p3]).then(res=>{console.log(res)});

// Promise.any([p1, p2, p3]).then(res=>{console.log(res)}).catch(err=>{console.log(err)});