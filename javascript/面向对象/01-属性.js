// let obj = {};
// console.log(obj);
// Object.defineProperty(obj,'age',{
//   configurable: true,
//   value:12345
// })
// delete obj.name;
// delete obj.age;
// console.log(obj.age);
// Object.defineProperty(obj,'age',{ 
//   get(){

//   }
// // })
// let a = Object.getOwnPropertyDescriptor(obj,'age');
// console.log(a.value);
// console.log(a.configurable);
// let a = Object.getOwnPropertyDescriptors(obj);
// console.log(a);
// let dest = {
//   set a(val){
//     console.log(1111);
//   }
// };
// let src = {
//   get (val){
//     console.log(222);
//     return 2;
//   }
// };
// Object.assign(dest, src);
// console.log(dest);

// let scope = 'global scope';
// function checkscope(){
//   let scope = 'local scope';
//   function f(){return scope};
//   return f
// }
// console.log(checkscope()())

// let unique = (function(){let a = 0; return function(){return a++}}());
// console.log(unique());
// console.log(unique());
// console.log(unique());

// function counter(n){
//   return {
//     get count(){
//       return n++;
//     },
//     set count(m){
//       if(m>n){n=m}else{
//         throw Error('bad massage');
//       }
//     }
//   }
// }
// let c = counter(200);
// console.log(c.count);
// console.log(c.count);

function myName(obj,name,flag){
  let value;
    obj[`set${name}`] = function(v){
      if(flag){
        value = v;
      }else{
        throw new Error("ipaddr:");
      }
    };
    obj[`get${name}`] = function(){
      console.log(value);
    }
}
let q = {}
myName(q,'name',true);
q.setname(123);
q.getname();

function aaa(){return []};

console.log(new aaa());