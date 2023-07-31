function throttle(fn,delay){
  let begin = new Date().getTime();
  let t= null;
  return function throttled(){
    let _self = this;
    let args = arguments;
    clearTimeout(t);
    let end = new Date().getTime();
    if(end-begin > delay){
      fn.apply(_self,args);
      begin = end;
    }else{
      t = setTimeout(()=>{fn.apply(_self,args)},delay);
    }
  }
}