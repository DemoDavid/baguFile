function debounce(fn,delay,flag){
  let t = null;
  let res;
  function debounced(){
   let args = arguments;
   let _self = this;
   if(t){
    clearTimeout(t);
   }
   if(flag){
    let exec = !t;
    t = setTimeout(function(){t = null},delay);
    if(exec){
      res = fn.apply(_self,args);
    }
    }else{
      t = setTimeout(function(){res = fn.apply(_self,args)},delay);
    }
  }
  return debounced;
}