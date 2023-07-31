function linkList(){
    function Node(data){
        this.data = data;
        this.next = null;
    }
    this.length = 0;
    this.head = null;
    linkList.prototype.append = function(data){
        var example = new Node(data);
        if(this.length == 0){
            this.head = example;
        }else{
            var current = this.head;
            while(current.next!=null){
                current = current.next;
            }
            current.next = example;
        }
        this.length++;
    }
    linkList.prototype.toString = function(){
        var allString = '';
        var current = this.head;
        while(current!= null){
            allString += current.data+' ';
            current = current.next;
        }
        return allString;
    }
    linkList.prototype.insert = function(position,data){
        if(position<0||position>this.length) return false;
        var example = new Node(data);
        // if(this.length == 0){
        //     this.head = example;
        // };
        if(position ==0){
            example.next = this.head
            this.head = example;
        }else{
            var current = this.head;
            var previous = null;
            var index = 0;
            while(position > index++){
                previous = current;
                current = current.next;
            }
            example.next = current;
            previous.next = example;
        }
        this.length++;
    }
    linkList.prototype.update = function(position,data){
        if(position<0||position>this.length-1) return false;
        var example = new Node(data);
        if(position ==0){
            example.next = this.head.next;
            this.head = example;
        }else{
            var current = this.head;
            var previous = null;
            var index = 0;
            while(position>index++){
                previous = current;
                current = current.next;
            }
            previous.next = example;
            example.next = current.next;
        }
    }
    linkList.prototype.get = function(position){
        if(position<0||position>this.length-1) return false;
        var current = this.head;
        var index = 0;
        while(position > index++){
            current = current.next;
        }
        return current.data;
    }
    linkList.prototype.indexOf = function(str){

        var index = 0;
        var current = this.head;
        while(current!=null){
            if(str == current.data){
                return index;
            }
            current = current.next;
            index++;
        }  
        return '404 Not Found';    
    }
    linkList.prototype.removeAt  = function(position){
        if(position<0||position>this.length-1) return false;
        var current = this.head;
        var previous = null;
        var index = 0;
        if(position ==0){
            this.head =current.next;
        }else{
            while(position>index++){
            previous = current;
            current = current.next;
        }
            previous.next = current.next;
        }
        this.length--;
        return current.data;
    }
    linkList.prototype.remove = function(data){
        var position = this.indexOf(data);
        return this.removeAt(position);
    }
    linkList.prototype.isEmpty = function(){
        return this.length == 0;
    }
    linkList.prototype.size = function(){
        return this.length
    }
}
var p  = new linkList();
p.append('abc')
p.append('cba')
p.insert(0,'ccc')
p.update(2,'fuck')
console.log(p.indexOf('fuck'))
console.log(p.get(0))
console.log(p.toString())
console.log(p.removeAt(2))
console.log(p.toString())
console.log(p);
console.log(p.remove('ccc'));
console.log(p.toString())
console.log(p.isEmpty())
console.log(p.size())