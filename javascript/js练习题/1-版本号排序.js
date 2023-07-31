/** 
 * @param 数组
*/
const arr=['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];

function sortArr(arr){
  
  arr.sort((a,b)=>{
    const alen = a.length;
    const blen = b.length;
    let bigLen = Math.max(alen, blen);
    for(let i = 0 ; i < bigLen ; i++){
      let tempA = Number(a[i]||0);
      let tempB = Number(b[i]||0);
      if(tempA < tempB){
        return 1;
      }else{
        return -1;
      }
    }
    return 0;
  })
  return arr;
}
console.log(sortArr(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']));