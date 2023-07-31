let obj = {
  name:'shaobei',
  age:23
};
console.log(this);
Object.keys(obj).forEach((item)=>{
  let value = obj[item];
  Object.defineProperty(obj,item,{
    set(newValue){
      console.log(this,'设置了value属性');
      value = newValue;
    },
    get(){
      console.log('得到了value属性')
      return value;
    }
  })
}) 

console.log(obj.name);
obj.name = 'xiaoshaobei'