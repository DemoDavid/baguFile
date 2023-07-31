function hashMap(){
    this.item = [];
    this.count = 0;
    //index指数组长度
    this.limit = 7;
    hashMap.prototype.hashAble = function (str,limit){
        var hashBox = 0;
        for(var i = 0 ; i<str.length ; i++){
            hashBox = 37*hashBox + str.charCodeAt(i);
        }
        var index = hashBox%limit;
        return index;
    }
    hashMap.prototype.put = function (str,value){
        var index = this.hashAble(str,this.limit);
        var buttom = this.item[index];
        if(buttom==null){
            this.item[index] = [];
            buttom = this.item[index];
        }
        for(var i = 0 ; i<buttom.length ; i++){
            var target = buttom[i];
            if(target[0]==str){
                target[1] = value;
                return;
            }
        }
        buttom.push([str,value]);
        this.count++;
        if(this.count/this.limit>0.75){
            var prelimit = this.limit*2;
            var nextLimit = this.changePrime(prelimit);
            this.resize(nextLimit);
        }
    }
    hashMap.prototype.get = function (str){
        var index = this.hashAble(str,this.limit); 
        var buttom = this.item[index];
        if(buttom==null){
            return false;
        }
        for(var i = 0 ; i<buttom.length ; i++){
            var target = buttom[i];
            if(target[0]==str){
                return target[1]
            }
        }
        return false;
    }
    hashMap.prototype.remove = function (str){
        var index = this.hashAble(str,this.limit); 
        var buttom = this.item[index];
        if(buttom==null){
            return false;
        }
        for(var i = 0 ; i<buttom.length ; i++){
            var target = buttom[i];
            if(target[0]==str){
                buttom.splice(i,1)
                this.count--;
                if(this.limit>7&&this.count/this.limit<0.25){
                    var haf = parseInt(this.limit/2);
                    this.resize(haf);
                }
                return target;
            }
        }
        return false;
    }
    hashMap.prototype.isEmply = function (){
        return this.count ==0;
    }
    hashMap.prototype.size = function(){
        return this.count;
    }
    hashMap.prototype.resize = function(newLimit){
        var oldItem = this.item;
        this.item = [];
        this.count = 0;
        this.limit = newLimit;
        for(var i = 0 ; i < oldItem.length ; i++){
            var buttom = oldItem[i];
            if(buttom==null){
                continue;
            }
            for(var j= 0; j<buttom.length; j++){
                var target = buttom[j];
                this.put(target[0],target[1]);
            }
        } 
    }
    hashMap.prototype.isPrime = function (num){
        if(num<=1)return false;
        for(var i =2;i<parseInt(Math.sqrt(num));i++){
            if(num%i==0){
                return false;
            }
        }
        return  true;
    }
    hashMap.prototype.changePrime = function(num){ 
        while(!this.isPrime(num)){
            num++;
        }
        return num;
    }
}
var p = new hashMap();
p.put('a',123)
p.put('b',456)
p.put('c',456)
p.put('d',456)
p.put('e',456)
p.put('ff',456)
p.put('ggg',456)
p.put('dd',456)
p.put('ccc',456)
p.put('ads',456)
p.put('aas',456)
p.put('bds',456)
p.put('bfff',456)
p.put('aars',456)
p.put('ssss',456)
p.put('asfas',456)
p.put('gdfg',456)
p.put('xcvxvx',456)
console.log(p);
