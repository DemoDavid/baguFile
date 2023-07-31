// function PriortyElement(element, priorty) {
//     this.element = element;
//     this.priorty = priorty;
// }
// function PriortyQuene(){
//     this.items = [];
//     PriortyQuene.prototype.enqueue = function(element,priorty){
//         let newElement = new PriortyElement(element,priorty);
//         if(this.items.length == 0){
//             this.items.push(newElement);
//         }else{
//             let flag = false;
//             for(let i = 0; i < this.items.length; i++){
//                 if(newElement.priorty > this.items[i].priorty){
//                     this.items.splice(i, 0, newElement); 
//                     flag = true;
//                     break;
//                 }     
//             }
//             if(!flag){
//                     this.items.push(newElement);
//                 }
//         }
//     }
//     PriortyQuene.prototype.dequeue =  function(){
//         return this.items.shift();
//     }
//     PriortyQuene.prototype.front = function(){
//         return this.items[0]
//     }
//     PriortyQuene.prototype.isEmpty = function(){
//         return this.items.length==0;
//     }
//     PriortyQuene.prototype.size = function(){
//         return this.items.length;
//     }
//     PriortyQuene.prototype.toString = function(){
//         let str = '';
//         for(i=0;i<this.items.length;i++){
//             str  = str + this.items[i].element+' '+this.items[i].priorty;
//         }
//         return str;
//     }
// }
// let p = new PriortyQuene();
// p.enqueue('allen',20);
// p.enqueue('barry',24);
// p.enqueue('anal',12);
// p.enqueue('rose', 22);
// console.log(p.toString());
console.log([...new Set([1,2,3,4,1,2,3,4,54])])