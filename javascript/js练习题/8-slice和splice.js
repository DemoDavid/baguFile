const arr = [1,2,3,4,5];
let res1 = arr.splice(1,1,100);
console.log(res1,arr);

let brr = [1,2,3,4,5];
console.log(brr.slice(1,2));

let obj = {
  a:1223,
  foo:()=>{console.log(this.a)}
};
obj.foo();