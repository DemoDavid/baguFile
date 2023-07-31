function foo(num) {
  // console.log(num);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  })
}

function* gen() {
  const num1 = yield foo(1);
  const num2 = yield foo(num1);
  const num3 = yield foo(num2);
  return num3;
}

// 模拟async
function generatorToaAsync(generatorFn) {
  // ...
  //具有async功能的函数
  return function () {

    // const gen = generatorFn.apply(this, arguments)
    const gen = generatorFn()

    return new Promise((resolve, reject) => {

      function loop(key,arg) {
        let res = null;

        res = gen[key](arg); // 等价于gen.next(arg)  // { value: Promise { <pending> }, done: false }

        const { value, done } = res;
        if(done) {
          return resolve(value);
        }else {   // 没执行完yield
          // Promise.resolve(value) 为了保证value 中 Promise状态已经变更成'fulfilled'
          Promise.resolve(value).then(val => loop('next',val));
        }
      }

      loop('next')

    })
  }
}

const asyncFn = generatorToaAsync(gen);

// console.log(asyncFn());  // Promise{}

asyncFn().then(res => {
  console.log(res)
});