const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

class DWPromise{
  constructor(executor){
    this.status = PROMISE_STATUS_PENDING;
    this.resVal = void 0;
    this.errVal = void 0;
     const resolve = (value)=>{
      if(this.status == PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_FULFILLED;
        this.resVal = value;
        console.log('resolve函数被执行');
      }
    }
    const reject = (reason)=>{
      if(this.status == PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_REJECTED;
        this.errVal = reason;
        console.log('rejected函数被执行');
      }
    }
    executor(resolve, reject);
  }
}

let promise = new DWPromise((resolve,reject)=>{
  resolve();
})