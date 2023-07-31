const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';
// 这里主要解决无法连续使用then方法，通过存放函数数组进行调用；
// 关于延时执行then方法也进行了优化;
class DWPromise{
  constructor(executor){
    this.status = PROMISE_STATUS_PENDING;
    this.resVal = void 0;
    this.errVal = void 0;
    this.queueOnRejected =[];
    this.queueOnResolved =[];
     const resolve = (value)=>{
      if(this.status == PROMISE_STATUS_PENDING){
        
        process.nextTick(()=>{
          // 这里为什么还是要将更改status放在里面呢，因为开始调用resolve时已经更改了
          // status，then方法里调用延迟函数时，顺便会将同步函数调用一次，导致打印出undefined;
          // 但是放里面会导致能够同时resolve,reject这个bug，这时候需要加上一句判断;
          if(this.status!==PROMISE_STATUS_PENDING)return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.resVal = value;
          console.log('resolve函数被执行');
          this.queueOnResolved.forEach(func=>{
            func(this.resVal);
          })
        })
        
      }
    }
    const reject = (reason)=>{
      if(this.status == PROMISE_STATUS_PENDING){
        
        process.nextTick(()=>{
          if(this.status!==PROMISE_STATUS_PENDING)return;
          this.status = PROMISE_STATUS_REJECTED;
          this.errVal = reason;
          console.log('rejected函数被执行');
          this.queueOnRejected.forEach(func=>{
            func(this.errVal);
          })
        })
      }
    }
    executor(resolve, reject);
  }
  then(onResolved,onRejected){
    if(this.status == PROMISE_STATUS_FULFILLED&&onResolved){
// 当pending已经确定为resolved时，不需要再加入队列执行了，因为队列执行已经在之前完成了，现在加入也没用了，所以可以直接调用
      onResolved(this.resVal);
    }else if(this.status == PROMISE_STATUS_REJECTED&& onRejected){
      onRejected(this.errVal);
    }
    
    this.queueOnRejected.push(onRejected);
    this.queueOnResolved.push(onResolved);
  }
}

let promise = new DWPromise((resolve,reject)=>{
  // resolve(123);
  reject(456);
})

promise.then((res)=>{console.log(res)},(err)=>{console.log('err'+err)});

promise.then((res)=>{console.log(res)},(err)=>{console.log(err)});

promise.then((res)=>{console.log(res)},(err)=>{console.log(err)});

setTimeout(()=>{
  promise.then((res)=>{console.log(res)},(err)=>{console.log(err)});
},2000)