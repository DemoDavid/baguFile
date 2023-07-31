const global = Object.create(null);

function memo(fn){
    return (
        function(str){
            const hit = global[str];
            return hit||(global[str] = fn(str));
        }
    )
}

// 定义一个纯函数
function add(a){
    return (((a+a)*10)-2)*3
}

// 调用高阶函数对add进行缓存；
let sum = memo(add);

all = 0
start = new Date().getTime()
for(let i = 0; i<10000; i++){
  all =  all + sum(i)
}
console.log(all)
end = new Date().getTime()
console.log('执行时间', end - start)

