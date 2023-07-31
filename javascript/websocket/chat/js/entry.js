;((document,location,store)=>{
    const username = document.querySelector('#username');
    const btn = document.querySelector('#login');
    const init = ()=>{
      bindEvent();
    }
    function bindEvent(){
      btn.addEventListener('click', checkStore,false);
    }
    function checkStore(){
      const value = username.value;
      if(value.length<4){
        alert("长度不满足");
        return;
      }
      store.setItem('username',value);
      location.href = 'index.html';
    }

    init()

})(document,location,localStorage)