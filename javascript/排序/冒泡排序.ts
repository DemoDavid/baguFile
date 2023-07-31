function BubbleSort(arr:number[]):number[]{
    const len:number = arr.length-1;
    for(let j = 0 ; j < len ; j++){
      let flag = true;
      for(let i = 0 ; i < len-j ; i++){
        if(arr[i]>arr[i+1]){
          let temp:number = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          flag = false;
        }
      }
      if(flag){
        break;
      }
    }
    return arr;
}
let arr:Array<number> = [24,215,12,214,124,5,3124,12,51,22];
console.log(BubbleSort(arr))

export default arr;