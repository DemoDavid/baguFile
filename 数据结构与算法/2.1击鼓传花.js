function Queue(){
    this.items = [];
    Queue.prototype.enqueue = function(element){
        this.items.push(element);
    }
    Queue.prototype.dequeue =  function(){
        return this.items.shift();
    }
    Queue.prototype.front = function(){
        return this.items[0]
    }
    Queue.prototype.isEmpty = function(){
        return this.items.length==0;
    }
    Queue.prototype.size = function(){
        return this.items.length;
    }
    Queue.prototype.toString = function(){
        let str = '';
        for(i=0;i<this.items.length;i++){
            str  = str + this.items[i]+' ';
        }
        return str;
    }
}

function Game(namelist,num){
    let p  =new Queue();
    for(i=0;i<namelist.length;i++){
        p.enqueue(namelist[i]);
    }
    while(!(p.size() == 1)){
    for(i=0;i<num-1;i++){
        let res = p.dequeue();
        p.enqueue(res);
    }
    p.dequeue();
}

    console.log(p.toString());
    const last = p.front();
    return namelist.indexOf(last) 
}
const list = ['barry','allen','mdk','pust','buding','lambda']
const result =Game(list,5);
