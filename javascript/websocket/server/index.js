const Ws = require('ws');

;((Ws)=>{
  const server = new Ws.Server({port:8000});
  const init = ()=>{
    bindEvent();
  }
  function bindEvent(){
    server.on('open',handleOpen);
    server.on('close',handleClose);
    server.on('error',handleError);
    server.on('connection',handleConnection);
  }

  function handleOpen(){
    console.log('socket open')
  }

  function handleClose(){
    console.log('socket close')
  }

  function handleError(){
    console.log('socket error')
  }
  
  function handleConnection(ws){
    console.log('socket connection')
    ws.on('message',handleMessage);
  }

  function handleMessage(msg){
    console.log(msg.toString());
    server.clients.forEach((item)=>{
      item.send(msg.toString());
    })
  }
  init()

})(Ws)