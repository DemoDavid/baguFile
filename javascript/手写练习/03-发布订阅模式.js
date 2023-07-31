class EventEmitter {
  constructor(){
    this.events = {};
  }
  on(type,callback){
    if(!this.events[type]){
      this.events[type] = [callback];
    }else{
      this.events[type].push(callback);
    }
  }
  off(type,callback){
    if(!this.events[type]){
      return 
    }else{
      this.events[type].filter(item=>{
        return item!=callback;
      })
    }
  }
  // once(type,callback){
    
  //   let fn = ()=>{
  //     callback();
  //     let _self = this;
  //     // process.nextTick(()=>{_self.off,type,fn});
  //     this.off(type,fn);
  //   }
  //   this.on(type,fn)
  // }
  emit(type,...rest){
    if(this.events[type]){
      this.events[type].forEach(item => {
          item.apply(this,rest);
      });
    }
  }
}

const man = new EventEmitter();
// man.on('click',()=>{console.log(123)});
man.emit('click');
man.emit('click');
