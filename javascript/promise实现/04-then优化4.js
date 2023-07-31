const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';
// 优化then方法的链式调用;
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
    return new DWPromise((resolve, reject) => {
      if (this.status == PROMISE_STATUS_FULFILLED && onResolved) {
        // 这里解决的是链式调用中获取onResolved函数返回值继续链式调用的问题
        try {
          const res = onResolved(this.resVal);
          resolve(res);
        } catch (error) {
          reject(error);
        }
      } else if (this.status == PROMISE_STATUS_REJECTED && onRejected) {
        try {
          const err = onRejected(this.errVal);
          resolve(err);
        } catch (error) {
          reject(error);
        }
      }
      if (this.status == PROMISE_STATUS_PENDING) {
        // 这里使用回调函数来获取队列调用的返回值，并且调用resolve函数;
        this.queueOnRejected.push((errVal) => {
          try {
            const err = onRejected(errVal);
            resolve(err);
          } catch (error) {
            reject(error);
          }
        });
        this.queueOnResolved.push((resVal) => {
          try {
            const res = onResolved(resVal);
            resolve(res);
          } catch (error) {
            reject(error);
          }
        });
      }
    })
  }
}

let promise = new DWPromise((resolve, reject) => {
  resolve(123);
  // reject(456);
})

promise.then(
  (res) => { return 'bbb' },
  (err) => { return '1111' }).then(res => {return 222},err => { console.log(err) }).then(res => { console.log(res)},err => { console.log(err)})

