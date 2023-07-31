function BinarySearchTree(){
    function Node(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.root = null

    BinarySearchTree.prototype.insert = function(key){
        var node =new Node(key);
        if(this.root == null){
            this.root = node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    BinarySearchTree.prototype.insertNode = function(node,newnode){
        if(node.key > newnode.key){
            if(node.left == null){
                node.left = newnode;
            }else{
                this.insertNode(node.left,newnode)
            }
        }else{
            if(node.right == null){
                node.right = newnode;
            }else{
                this.insertNode(node.right,newnode)
            }
        }
    }
}