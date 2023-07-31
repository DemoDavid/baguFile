const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';
// 优化then方法的链式调用;
function tryCatch(exeFn,value,resolve,reject){
  try{
    const res = exeFn(value);
    resolve(res);
  }catch(err){
    reject(err);
  }  
}
class DWPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.resVal = void 0;
    this.errVal = void 0;
    this.queueOnRejected = [];
    this.queueOnResolved = [];
    const resolve = (value) => {
      if (this.status == PROMISE_STATUS_PENDING) {

        process.nextTick(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.resVal = value;
          console.log('resolve函数被执行');
          this.queueOnResolved.forEach(func => {
            func(this.resVal);
          })
        })

      }
    }
    const reject = (reason) => {
      if (this.status == PROMISE_STATUS_PENDING) {

        process.nextTick(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.errVal = reason;
          console.log('rejected函数被执行');
          this.queueOnRejected.forEach(func => {
            func(this.errVal);
          })
        })
      }
    }
    try{
      executor(resolve, reject);
    }catch(e) {
      reject(e);
    }
    
  }
  then(onResolved, onRejected) {
    onRejected = onRejected===undefined ? (err)=>{throw err} : onRejected;

    return new DWPromise((resolve, reject) => {
      if (this.status == PROMISE_STATUS_FULFILLED && onResolved) {
        // 这里解决的是链式调用中获取onResolved函数返回值继续链式调用的问题
        tryCatch(onResolved,resVal,resolve,reject);
      } else if (this.status == PROMISE_STATUS_REJECTED && onRejected) {
        tryCatch(onRejected,errVal,resolve,reject);
      }
      if (this.status == PROMISE_STATUS_PENDING) {
        // 这里使用回调函数来获取队列调用的返回值，并且调用resolve函数;
        this.queueOnRejected.push((errVal) => {
          tryCatch(onRejected,errVal,resolve,reject);
        });
        this.queueOnResolved.push((resVal) => {
          tryCatch(onResolved,resVal,resolve,reject);

        });
      }
    })
  }
  catch(onRejected) {
    this.then(void 0,onRejected);
  }
}

let promise = new DWPromise((resolve, reject) => {
  // resolve(123);
  reject(456);
  // 由于下面的then函数没有输入reject回调,就调不到reject函数，这里用rejected判断undefined来
  // 赋予新的函数，用来抛出错误;
})

promise.then((res) => {console.log(res)}).catch(err=>{console.log(err)})


