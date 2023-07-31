let template = '我是{{name}}，今年{{age}}岁';
let data = {
  name:'zdw',
  age:13
}
function render(template, data) {
  let res = template.replace(/\{\{(\w+)\}\}/g,(match,key) => {
    return data[key];
  })
  return res;
}
console.log(render(template, data));