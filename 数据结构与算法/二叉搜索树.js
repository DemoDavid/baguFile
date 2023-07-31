function twoBarTree(){
    function Node(key){
        this.key = key
        this.left = null;
        this.right = null;
    }
    this.root = null;


    twoBarTree.prototype.insert = function(key){
        let newNode = new Node(key);
        if(this.root==null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    twoBarTree.prototype.insertNode = function(node,newnode){
        if(newnode.key<node.key){
            if(node.left==null){
                node.left = newnode;
            }else{
                this.insertNode(node.left,newnode);
            }
        }else{
            if(node.right == null){
                node.right = newnode 
            }else{
                this.insertNode(node.right,newnode);
            }
        }
    }
    //前序遍历
    twoBarTree.prototype.preIterator = function(callback){
        this.preIteratorNode(this.root,callback)
    }
    twoBarTree.prototype.preIteratorNode = function(node,callback){
        if(node!=null){
            callback(node.key)
            this.preIteratorNode(node.left,callback);
            this.preIteratorNode(node.right,callback);
        }
        
    }
    twoBarTree.prototype.midIterator = function(callback){
        this.midIteratorNode(this.root,callback)
    }
    twoBarTree.prototype.midIteratorNode = function(node,callback){
        if(node!=null){
            this.midIteratorNode(node.left,callback);
            callback(node.key)
            this.midIteratorNode(node.right,callback);
        }
    }
    twoBarTree.prototype.finIterator = function(callback){
        this.finIteratorNode(this.root,callback)
    }
    twoBarTree.prototype.finIteratorNode = function(node,callback){
        if(node!=null){
            this.finIteratorNode(node.left,callback);
            this.finIteratorNode(node.right,callback);
            callback(node.key)
        }
    }
    twoBarTree.prototype.max = function(){
        let node = this.root;
        let key = null;
        while(node != null){
            key = node.key;
            node = node.right;
        }
        return key
    }
    twoBarTree.prototype.min = function(){
        let node = this.root;
        let key = null;
        while(node != null){
            key = node.key;
            node = node.left;
        }
        return key
    }
    twoBarTree.prototype.search = function(key){
        let node = this.root;
        while(node != null){
           if(key < node.key){
            node = node.left
            }else if(key > node.key){
            node = node.right
            }else{
            return true;
            } 
        }  
        return false;
    }
    twoBarTree.prototype.remove = function(key){
        this.root =this.removeNode(this.root, key);
    }
    twoBarTree.prototype.removeNode = function(node, key){
        if(node===null){
            return null;
        }
        if(key < node.key){
            node.left = this.removeNode(node.left, key)
            return node;
        }else if(key > node.key){
            node.right = this.removeNode(node.right, key);
            return node;
        }else{
            if(node.left ===null&&node.right===null){
                node = null;
                return node
            }


            if(node.left === null){
                node = node.right;
                return node
            }else if(node.right === null){
                node = node.left;
                return node
            }

            
            var aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node
        }
    }
    twoBarTree.prototype.findMinNode = function(node){
        while(node && node.left !== null){
            node = node.left;
        }
        return node;
    }
}
var p = new twoBarTree();
p.insert(11)
p.insert(7)
p.insert(15)
p.insert(5)
p.insert(3)
p.insert(9)
p.insert(8)
p.insert(10)
p.insert(13)
p.insert(12)
p.insert(14)
p.insert(20)
p.insert(18)
p.insert(25)
p.insert(6)
p.insert(19)
console.log(p);
var str = '';
// p.preIterator(function(value) {
//     str  +=value +' ';
// })
// p.finIterator(function(value) {
//     str  +=value +' ';
// })
console.log(p.max())

console.log(p.search(222))
console.log(p.remove(11))