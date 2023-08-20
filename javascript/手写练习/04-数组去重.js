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

// 利用数组的filter()+indexOf()

function uniqueArr4(arr4){
  return arr4.filter((item,index)=>{
    return arr4.indexOf(item)===index;
  })
}


// 最强去重
function unique7_1(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
      return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)//已存在则过滤，不然就新增属性
  })
}
var testArr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN,
  'NaN', 0, 0, 'a', 'a', {}, {}
];
console.log("对象属性改良", unique7_1(testArr))
