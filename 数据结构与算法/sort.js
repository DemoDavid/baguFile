function Arraylist(){
    this.array = [];
    Arraylist.prototype.insert = function(key){
        this.array.push(key);
    }
    Arraylist.prototype.toString = function(){
        return this.array.join("->");
    }
    Arraylist.prototype.bubbleSort = function(){
        var length = this.array.length
        for(i=length;i>=0;i--){
            for(j=0;j<i-1;j++){
                if(this.array[j]>this.array[j+1]){
                    var temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp;
                }
            }
        }
    }
    Arraylist.prototype.selectSort = function(){
        var length = this.array.length;
        for(var i=0;i<length-1;i++){
            var min = i;
            for(var j=i+1;j<length;j++){
                if(this.array[min]>this.array[j]){
                    min = j
                }
            }
            var temp = this.array[i];
            this.array[i] = this.array[min];
            this.array[min] = temp;
        }
    }
    Arraylist.prototype.insertionSort = function(){
        var length = this.array.length;
        for(var i = 1;i<length;i++){
            var temp = this.array[i];
            var j = i;
            while(this.array[j-1]>temp&&j>0){
                this.array[j] = this.array[j-1];
                j--;
            }
            this.array[j] = temp;
        }
    }
}
var arr = new Arraylist();
arr.insert(12);
arr.insert(25);
arr.insert(14);
arr.insert(4);
arr.insert(16);
arr.insert(8);
// arr.bubbleSort();
//arr.selectSort();
arr.insertionSort();
console.log(arr.toString());

