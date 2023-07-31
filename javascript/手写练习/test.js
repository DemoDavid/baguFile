function myInterval(fn,delay){
  let time = null;
  function Interval(){
    fn();
    time = setTimeout(Interval,delay);
  }
  Interval();
}
myTimeout(()=>{console.log(1122)},1000);

function myTimeout(fn,delay){
  const timer = setInterval(()=>{
    fn();
    clearInterval(timer);
  },delay);
}