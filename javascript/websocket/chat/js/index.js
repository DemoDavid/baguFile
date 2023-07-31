;((document,WebSocket,localStorage)=>{
  const message = document.querySelector('#message');
  const send = document.querySelector('#send');
  const list = document.querySelector('#list');
  const ws = new WebSocket('ws:localhost:8000');

  const init = ()=>{
    bindEvent();
  }
  function bindEvent(){
    send.addEventListener('click',sendClick,false);
    ws.addEventListener('open',handleOpen,false);
    ws.addEventListener('close',handleClose,false);
    ws.addEventListener('error',handleError,false);
    ws.addEventListener('message',handleMessage,false);
  }

  function sendClick(){
    console.log('消息已发送');
    const msg = message.value;
    const name = localStorage.getItem('username');
    ws.send(JSON.stringify({
      message:msg,
      name,
      date:new Date()
    }))
  }
  function handleOpen(e){
    console.log('websocket open',e)
  }
  function handleClose(e){
    console.log('websocket close',e)
  }
  function handleError(){
    console.log('websocket error')
  }
  function handleMessage(e){
    console.log('websocket message');
    const data = JSON.parse(e.data);
    const inner = document.createElement('li');
    inner.innerHTML = `
      <p>
        <span>${data.name}</span>
        <div>${data.date}</div>
        <h2>${data.message}</h2>
      </p>
    `
    list.appendChild(inner);
  }

  init()
})(document,WebSocket,localStorage);