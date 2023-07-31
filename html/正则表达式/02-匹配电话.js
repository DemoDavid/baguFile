let str = '张三:010-12346789';
// 取出手机号
console.log(str.match(/\d{3}-\d{8}/g));
// 取出中文
console.log(str.match(/[^\d:-]+/g));
const reg = /\[object ()/