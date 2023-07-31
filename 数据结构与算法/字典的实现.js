function Dictionary(){
    this.item = {};
    Dictionary.prototype.has = function(key){
        return this.item.hasOwnProperty(key);
    }
    Dictionary.prototype.set = function(key, value){
        if(this.has(key))return false;
        this.item[key] = value;
    }
    Dictionary.prototype.remove = function(key){
        if(!this.has(key))return false;
        delete this.item[key];
        return true;
    }
    Dictionary.prototype.get = function(key){
        return this.has(key) ? this.item[key] :null;
    }
    Dictionary.prototype.keys = function(){
        return Object.keys(this.item);
    }
    Dictionary.prototype.size = function(){
        return this.keys().length;
    }
    Dictionary.prototype.clear = function(){
        this.item = {};
    }
}
// var book = new Dictionary();
// console.log(book.set(1,'abc'))
// console.log(book.set(2,'def'))
// console.log(book.set(3,'ghi'))
// console.log(book.get(1))
// console.log(book.remove(2))
// console.log(book.has(2))
// console.log(book.keys())
// console.log(book.size())
