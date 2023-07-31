function debounce(fn,time,flag){
    // fn代表传入的函数，time为时间，flag为是否立即执行；
    let t = null;
    // 利用闭包属性定义计时器；
    let res;
    // 用来记录函数的返回值;
    function debounced(){
        let _self = this;
        // settimeout为全局调用,所以需要更改this对象；
        let args = arguments;
        // 保存eventTarget对象；
        
        if(t){
            clearTimeout(t);
            // 在第二次调用函数的时候，结束上一次的定时器；
            // 防止定时器在时间间隔内多次调用；
        }

        if(flag){
            // 立即执行；
            let exec = !t;
            //当第一次进来时，exec为true，设置定时器，并在time时间后取消定时器，直接执行函数fn；
            //当第二次进来时，如果还在time时间内，exec为false，加长定时器时间，不执行函数；
            // 如果不在time时间内，exec为true，同上；
            t = setTimeout(()=>{
                t = null;
            },time);

            if(exec){
                res = fn.apply(_self,args);
            }
        }else{
            // 不立即执行，直接调用函数；
            t = setTimeout(()=>{
               res = fn.apply(_self,args);
            },time);
        }
        return res;
    }
    debounced.remove = function(){
        clearTimeout(t);
        t = null;
    }

    return debounced;
}