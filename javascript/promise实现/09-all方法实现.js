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

    // onResolved = onResolved===undefined ? (res)=>{return res}: onResolved;
    // 这里加一层Resolved判断的原因：catch没有传入resolve函数，所以onResolved为undefined
    // 先不管，好像没问题；
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
    // 因为要实现finally函数，所以必须return返回值
    return this.then(void 0,onRejected);
  }
  // 无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。
  finally(onFinally){
    this.then(()=>{onFinally()},()=>{onFinally()});
  }
  static resolve(value){
    return new DWPromise((resolve) => {
      resolve(value);
    })
  }
  static reject(error){
    return new DWPromise((resolve,reject) => {
      reject(error);
    })
  }
  // promise为数组;
  static all(promise){
    return new DWPromise((resolve,reject) => {
      const resValue = [];
      promise.forEach(item=>{
        item.then(res=>{
          resValue.push(res);
          if(resValue.length==promise.length){
            resolve(resValue);
          }
        },(err)=>{
          console.log(err);
        })
      })
    })
  }
}

const promise1 = new DWPromise((resolve,reject) => {
  resolve(111);
})
const promise2 = new DWPromise((resolve,reject) => {
  reject(222);
})
const promise3 = new DWPromise((resolve,reject) => {
  resolve(333);
})
const promise4 = new DWPromise((resolve,reject) => {
  reject(444);
})

DWPromise.all([promise1,promise2,promise3]).then(res=>{console.log(res)}).catch(err=>{console.log(err)});



