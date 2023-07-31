let obj = {
  name:123
}
Object.defineProperty(obj,'name',{
  value:1245,
  enumerable:false

})
for(let key in obj) {
  console.log(key);
}