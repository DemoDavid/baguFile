let reg = /\[object (\w+)\]/;
// \[ \]用来转义[]的意思。(\w+),$1为用当前匹配到的字符串代替整个字符串。也就是括号里的字符串。
function checkType(target) {
  let value = Object.prototype.toString.call(target).replace(reg,'$1');
  console.log(value);
}
checkType([function(){}]);