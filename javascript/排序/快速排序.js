function sort(arr,begin,end){
  if(begin<end){
    let i = begin;
    let j = end;
    let target = arr[begin];
    while(i<j){
      while(arr[j]>=target&&i<j){
        j--;
      }
      arr[i] = arr[j];
      while(arr[i]<target&&i<j){
        i++;
      }
      arr[j] = arr[i];
    }
    arr[i] = target;
    sort(arr,begin,i-1);
    sort(arr,i+1,end);
  }else{
    return;
  }
}
let arr = [11,6,32,51,10,5,14];
sort(arr,0,arr.length-1);
console.log(arr)
