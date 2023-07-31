function MyPromiseRace(arr){
  if(!Array.isArray(arr)){
    throw new TypeError('类型错误');
  }
  return new Promise((resolve,reject)=>{
    arr.forEach((item)=>{
      Promise.resolve(item).then((res)=>{
        resolve(res);
      },(err)=>{
        reject(err);
      })
    })
  })
}
const pro1 =new Promise((resolve,reject)=>{setTimeout(()=>{resolve(123)},0)})
const pro2 = Promise.resolve(234);
MyPromiseRace([pro1,pro2]).then(res=>{
  console.log(res);
})