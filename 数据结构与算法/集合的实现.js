function mySet(){
    this.item ={};
    mySet.prototype.add=function(value){
        if(this.has(value))return false;
        this.item[value] = value;
    }
    mySet.prototype.remove=function(value){
        if(!this.has(value))return false;
        delete this.item[value];
    }
    mySet.prototype.has = function(value){
        return this.item.hasOwnProperty(value);
    }
    mySet.prototype.clear = function(){
        this.item = {};
    }
    mySet.prototype.size = function(){
        return Object.keys(this.item).length
    }
    mySet.prototype.value = function(){
        return Object.keys(this.item)
    }
    mySet.prototype.connect = function(otherSet){
        var newSet = new Set();
        var newvalue = this.value();
        for(var i =0;i<this.size();i++){
                var item = newvalue[i];
                if(otherSet.has(item)){
                    newSet.add(item);
            }
        }
         return newSet;
    }
    mySet.prototype.allThing = function(otherSet){
        var newSet = new Set();
        var newvalue = this.value();
        for(var i =0;i<otherSet.size();i++){
            newSet.add(otherSet.value()[i]);
        }
        for(var q =0;q<this.size();q++){
            var items = newvalue[q];
                newSet.add(items);
        }
        return newSet;   
    }
    mySet.prototype.diff = function(otherSet){
        var newSet = new Set();
        var newvalue = this.value();
        for(var i =0;i<this.size();i++){
                var item = newvalue[i];
                if(!otherSet.has(item)){
                    newSet.add(item);
            }
        }
         return newSet;
    }
    mySet.prototype.son = function(otherSet){
        var value = this.value();
        for(var i = 0;i<value.length;i++){
            var items = value[i]
            if(!otherSet.has(items)){
                return false;
            }
        }
        return true;
    }
}
var p = new mySet();
p.add('abc')
p.add('def')
p.add('abc')
p.add('nba')
p.add('ccc')
console.log(p.value());
// p.remove('abc')
// console.log(p.size())
// console.log(p.value());
var p2 = new mySet();
p2.add('abc')
p2.add('def')
// p2.add('asdasdas')
// p2.add('fuck you')
console.log(p2.connect(p));
console.log(p2.allThing(p));
console.log(p2.son(p));
