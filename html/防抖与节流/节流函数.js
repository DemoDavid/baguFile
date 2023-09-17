 function throttle(fn,delay) {
  let t = null;
  // 闭包记录定时器
  let begin = new Date().getTime();
  // 当触发事件时begin开始记录触发时间
  return function(){
    let _self = this;
    let args = arguments;  
    let cur = new Date().getTime();
    // 记录下一次触发事件的时间；
    clearTimeout(t);
    // 防止开启多个定时器
    if(cur-begin>=delay){
      // 当时间大于触发时间时，执行一次函数，并更新第一次触发时间
      fn.apply(_self,args);
      begin = cur;
    }else{
      t = setTimeout(()=>{
        fn.apply(_self,args);
      },delay);
      // 当时间小于delay时，将函数延迟更长的时间
      // delay决定最后一次函数执行的时间
      // 因为每次执行函数定时器都会清除，但begin时间不变，所以最终还是会执行if
    }
  }
}