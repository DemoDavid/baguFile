const reg = /\[object (\w+)\]/;
// 用来匹配[object function];
// 调用原型上的toString方法来指向获取类型;
const checkType = (target)=>{return Object.prototype.toString.call(target).replace(reg,'$1').toLowerCase()};
// console.log(checkType(function(){}));
function clone(target,hash=new WeakMap){
    let result;
    let type = checkType(target);
    if(type==='object'){
        result = {}
    }else if(type==='array'){
        result = [];
    }else{
        return target;
    }
    // 判断对象或是数组中是否存在循环引用;
    if(hash.get(target))return target;
    let copyObj = new target.constructor();
    hash.set(target,1);
    for(let key in target){
        // 取出target对象或者数组中的键；
        if(checkType(target[key])==='object'||checkType(target[key])==='array'){
            result[key] = clone(target[key],hash);
        }else{
            result[key] = target[key];
        }
    }
    return result;
}
let bo = [1,2,{a:[1,2,3]}];
let ao = clone(bo);
ao[2].a = 1;
console.log(ao,bo);

let test = {a:1,
            b:2,
            c:{
                tt:334
            },
            d:[1,2,3]}
    test.e = test;
let cloneTemp =  clone(test);
cloneTemp[d] = 123;
console.log(cloneTemp);

// let reg = /\[object (\w+)\]/;

// const checkType = (target)=>{return Object.prototype.toString.call(target).replace(reg,'$1').toLowerCase()};

// function deepClone(target,hash=new WeakMap()){
//     let checked = checkType(target);
//     let result;
//     if(checked=="object"){
//         result = {};
//     }else if(checked=="array"){
//         result = [];
//     }else{
//         return target;
//     }
//     if(hash.get(target))return target;
//     const temp = new target.constructor();
//     hash.set(target,temp);

//     for(let key in target){
//         if(checkType(target[key])=="object"||"array"){
//             result[key] = deepClone(target[key],hash);
//         }else{
//             result[key] = target[key];
//         }
//     }
//     return result;

// }
// let test = {a:1,
//     b:2,
//     c:{
//         tt:334
//     },
//     d:[1,2,3]};
//     test.e = test;
// let temp = deepClone(test);
// console.log(temp);