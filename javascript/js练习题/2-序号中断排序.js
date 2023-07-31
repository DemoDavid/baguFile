/**
 * 
 * @param {*} arr 
 * @returns 
 * [1,2,3,4,6,7,9,13,15]=>['1->4','6->7','9','13','15'];
 */

const fun = (arr)=>{
  if(arr==null||arr.length<=1){
    return arr;
  }
  let res = [];
  let firstIndex = 0;
  let lastIndex = 0;
   
  function pushArr(firstIndex,lastIndex) {
    if(firstIndex==lastIndex){
      res.push(arr[firstIndex].toString());
    }else{
      res.push(`${firstIndex}->${lastIndex}`);
    }
  }

  for(let i = 1 ; i < arr.length ; i++){
    const temp = arr[i];
    if(arr[lastIndex]+1==temp){
      lastIndex = i;
    }else{
      pushArr(firstIndex,lastIndex);
      firstIndex = i;
      lastIndex = i;
    }
  }
  pushArr(firstIndex,lastIndex);
  return res;
}
console.log(fun([1,2,3,4,6,7,9,13,15]))