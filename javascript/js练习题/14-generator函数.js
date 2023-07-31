// 异步函数
function ajax(duration) {   
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(duration+'ms延时打印输出！,当前位于'+ new Date().getSeconds() +'秒')
			resolve(duration);
		},duration)
	})
}
// 生成器函数
function* main() {
	const user = yield ajax(2000);  
	console.log('user',user);

	const posts = yield ajax(10000);
	console.log(posts);
}

// 封装执行生成器函数
function co(generator) {
	const g = generator();
	function handleResult(result) {          
		if(result.done) return; //生成器函数结束
		result.value.then(data => {         //这里与yield的返回有关
			    console.log('继续执行！',data);
				handleResult(g.next(data));
		  },error => {
				g.throw(error);
		  }
		);
	}
	handleResult(g.next());
}

co(main);