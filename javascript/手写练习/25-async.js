function foo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
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
    const gen = generatorFn.apply(this, arguments);

    return new Promise((resolve, reject) => {
      function loop(key, arg) {
        let res = null;

        res = gen[key](arg); // 等价于gen.next(arg)  // { value: Promise { <pending> }, done: false }

        const { value, done } = res;

        if (done) {
          resolve(value);
        } else {
          // 没执行完yield
          // Promise.resolve(value) 为了保证value 中 Promise状态已经变更成'fulfilled'
          Promise.resolve(value).then((val) => {
            loop("next", val);
          });
        }
      }

      loop("next");
    });
  };
}

const asyncFn = generatorToaAsync(gen);

// console.log(asyncFn());  // Promise{}

asyncFn().then((res) => {
  console.log(res);
});

// function requestData(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url.includes('iceweb')) {
//         resolve(url)
//       } else {
//         reject('请求错误')
//       }
//     }, 1000);
//   })
// }

// function* getData() {
//   const res1 = yield requestData('iceweb.io')
//   const res2 = yield requestData(`iceweb.org ${res1}`)
//   const res3 = yield requestData(`iceweb.com ${res2}`)

//   console.log(res3)
// }

// //自动化执行 async await相当于自动帮我们执行.next
// function asyncAutomation(genFn) {
//   const generator = genFn()

//   const _automation = (result) => {
//     let nextData = generator.next(result)
//     if(nextData.done) return

//     nextData.value.then(res => {
//       _automation(res)
//     })
//   }

//   _automation()
// }

// asyncAutomation(getData)
