function uniqueArr(arr){
  return [...new Set(arr)];
}
let arr  = uniqueArr([1,2,3,4,5,6,1,2,3,412,412,2]);
// console.log(arr);

// 利用indexof
function uniqueArr2(arr){
  if(!Array.isArray(arr)){
    return;
  }
  let res = [];
  for(let value of arr){
    if(res.indexOf(value)===-1){
      res.push(value);
    }
  }
  console.log(res);
  return res;
}

uniqueArr2(arr);

// set+Array.from;
function uniqueArr3(arr){
  let set = new Set(arr);
  console.log(Array.from(set));
}
uniqueArr3(arr);
