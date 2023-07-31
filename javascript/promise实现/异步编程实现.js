// 普通实现;
function back(url){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(url)
    },2000);
  })
}
// back('coder').then(res=>{console.log(res); return back(res+'why')}).then(res=>{console.log(res)});

// genertor实现;
// function* getData(){
//   const res1 = yield back('co');
//   const res2 = yield back(res1+'der');
//   const res3 = yield back(res2+'why');
//   console.log(res3);
// };

// const myiter = getData();
// console.log(myiter.next());
// myiter.next().value.then(res=>{myiter.next(res+'der').value.then(res=>{myiter.next(res+'why').value.then(res=>{console.log(res)})})});

// 递归形式构造
// function getEnd(fn){
//   const iter = fn();
//   function exec(res){
//     const result =iter.next(res);
//     if(result.done){
//       return res.value;
//     }else{
//       result.value.then(res=>{exec(res)});
//     }
//   }
//   exec()
// }
// getEnd(getData);

// async function labuladong(){
//   let res = await back(123);
//   console.log(res);
// }
// labuladong();

// new Promise((resolve, reject) =>{
  
//   resolve(1);
//   console.log('aaa');
// })
// console.log(111);


// function* labuladong(){
//   const res1 = yield 2;
//   console.log(res1);
//   return 2;
// }
// let a = labuladong();
// console.log(a.next(2));console.log(a.next(2));

function* getData(){
  const res1 = yield back('123');
  const res2 = yield back(res1);
  return res2;
}

function exec(genFn){
  return function(){
    return new Promise((resolve, reject) =>{
      const g = genFn();
      g.next().value.then(res=>{
        g.next(res+'222').value.then(res=>{resolve(res)});
      })
    })
  }
}

const prom = exec(getData);
prom().then(res=>{console.log(res)});