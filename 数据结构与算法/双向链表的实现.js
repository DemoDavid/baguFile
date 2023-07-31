function doubleList(){
    function Node(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
    doubleList.prototype.toString = function(){
        var str = "";
        var current = this.head;
        while (current!=null){
            str = str+current.data+' ';
            current = current.next;
        }
        return str;
    }
    doubleList.prototype.append = function(data){
        var p = new Node(data);
        if(this.length == 0){
            this.head = p;
            this.tail = p;
        }else{
            this.tail.next = p;
            p.prev = this.tail;
            this.tail = p;
        }
        this.length++;
    }
    doubleList.prototype.insert = function(position,data){
        if(position<0||position>this.length)return false;
        var p = new Node(data);
        var current = this.head;
        var index = 0;
        if(this.length == 1){
            if(position ==0){
                this.head.prev = p;
                this.head.next = null;
                p.next = this.head;
                this.head = p;  
            }else{tthis.tail.next = p;
                p.prev = this.tail;
                this.tail = p;};
        }else{
            if(position = this.length){
                this.tail.next = p;
                p.prev = this.tail;
                this.tail = p;
            }else{
              while(index++<position){
                current = current.next;
                }
                current.prev.next = p;
                p.next = current;
                p.prev = current.prev;
                current.prev = p;  
            }
            
        }
        this.length++;
    }
    doubleList.prototype.get = function(position){ 
        var index = 0;
        current = this.head;
        while(index++ < position){
            current = current.next;
        }
        return current.data;
    }
    doubleList.prototype.indexOf = function(str){
        var index = 0;
        var current = this.head;
        while(current!= null){
            if(current.data == str){
                return index;
            }
            index++;
            current = current.next;
        }
        return "404 NOT FOUND";
    }
    doubleList.prototype.update = function(position,data){
        var index = 0;
        var current = this.head;
        while(index++ < position){
            current = current.next;
        }
        current.data = data;
    }
    doubleList.prototype.removeAt = function(position){
        if(position<0||position>=this.length)return false;
        var index = 0;
        var current = this.head;
        if(this.length==1){
            this.head = null;
            this.tail = null;
        }else{
            if(position==0){
                this.head.next.prev = null;
                this.head = this.head.next;
            }else if(position==this.length-1){
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            }else{
                while(index++<position){
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        this.length--;
    }
    doubleList.prototype.remove = function(str){
        const indexstr =  this.indexOf(str);
        this.removeAt(indexstr);
    }
    doubleList.prototype.isEmpty = function(){
        return this.length == 0;
    }
    doubleList.prototype.size = function(){
        return this.length;
    }
}
var p = new doubleList();
p.append('aaa');
p.append('bbb');
p.append('ccc');
p.insert(3,'num')
console.log(p.toString());
console.log(p.get(0));
console.log(p.indexOf('num'));
// p.update(2,'fuck you')
p.removeAt(0)
p.remove('bbb')
console.log(p.toString());
console.log(p.isEmpty());
console.log(p.size());