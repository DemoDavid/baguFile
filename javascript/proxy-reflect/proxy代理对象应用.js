let setting = function(obj,prop,value){
    if(prop=='age'){
        if(!Number.isInteger(value)){
            throw new Error('传入的值不是数字');
        }
        if(value>200){
            throw new Error('你不是超人');
        }
    }
    obj[prop] = value;
    return true;
};
let handler = {
    set:setting
}

let proxy = new Proxy({},handler);

try{
    proxy.age = 2200;
console.log(proxy.age);
}catch{
    console.log('missing');
}
