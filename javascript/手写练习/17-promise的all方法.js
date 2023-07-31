function MypromiseAll(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      throw new TypeError('传入的不是数组');
    }
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then((value)=>{
        count++;
        res.push(value);
        if(arr.length==count) {
          resolve(res);
        }
      }).catch((e)=>{reject()});
    }
  })
}
const pro1 = Promise.resolve(123);
const pro2 = Promise.resolve(234);
// Promise.all([pro1,pro2]).then(res=>{
//   console.log(res);
// })
MypromiseAll([pro1,pro2]).then(res=>{
  console.log(res);
})