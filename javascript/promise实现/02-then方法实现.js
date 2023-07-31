const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';
// 利用nextTick实现异步：
// 这里把nexttick放外面的原因是then方法会同时调用rejected和resolved;

class DWPromise{
  constructor(executor){
    this.status = PROMISE_STATUS_PENDING;
    this.resVal = void 0;
    this.errVal = void 0;
     const resolve = (value)=>{
      if(this.status == PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_FULFILLED;
        process.nextTick(()=>{
          this.resVal = value;
          console.log('resolve函数被执行');
          this.onResolved(this.resVal);
        })
        
      }
    }
    const reject = (reason)=>{
      if(this.status == PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_REJECTED;
        process.nextTick(()=>{ 
          this.errVal = reason;
          console.log('rejected函数被执行');
          this.onRejected(this.errVal);
        })
      }
    }
    executor(resolve, reject);
  }
  then(onResolved,onRejected){
    this.onResolved = onResolved;
    this.onRejected = onRejected;
  }
}

let promise = new DWPromise((resolve,reject)=>{
  resolve(123);
  // reject(456);
})

promise.then((res)=>{console.log(res)},(err)=>{console.log(err)});