// let startTime = new Date().getTime();
// let count = 0;

// setInterval(() => {
//     let i = 0;
//     while (i++ < 100000000); // 假设的网络延迟
//     count++;
//     console.log(
//         "与原设定的间隔时差了：",
//         new Date().getTime() - (startTime + count * 1000),
//         "毫秒"
//     );
// }, 1000);
// setInterval 缺点:定时器指定的时间间隔，表示的是何时将定时器的代码添加到消息队列，而不是何时执行代码。
// 所以真正何时执行代码的时间是不能保证的，取决于何时被主线程的事件循环取到，并执行。
// 使用 setInterval 时，某些间隔会被跳过；
// 可能多个定时器会连续执行；
// 可以这么理解：每个 setTimeout 产生的任务会直接 push 到任务队列中；
// 而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。


function myTimeInterval(fn,delay){
  let time = null;
  function Interval(){
    fn();
    time = setTimeout(Interval,delay);
  }
  Interval();
  return {
    cancel:()=>{clearTimeout(time)}
  }
}

myTimeInterval(()=>{console.log('123')},1000);

function myTimeout(fn,delay){
  const timer = setInterval(()=>{
    clearInterval(timer);
    fn();
  },delay);
}
// myTimeout(()=>{console.log(123)},2000);