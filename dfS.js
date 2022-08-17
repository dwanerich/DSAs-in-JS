

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
 insert(val){
     let newNode = new Node(val)
     if (this.root === null) {
         this.root = newNode;
         return this
     } else {
         let current = this.root
         while(true) {
             if(val === current.val) return 'duplicate';
             if (val < current.val) {
                 if (current.left === null) {
                     current.left = newNode
                     return this;
                 } else {
                     current = current.left;
                     }
                 } else if (val > current.val) {
                 if (current.right === null) {
                     current.right = newNode
                     return this
                 } else { current = current.right
                     }
                 }
             }
         }
     }
    bfs() {
        let root = this.root;
        let queue = []
        let results = []
        queue.push(root)
        while(queue.length) {
            root = queue.shift()
            results.push(root)
            if(root.left) queue.push(root.left);
            if(root.right) queue.push(root.right);
        }
        return results;
    }

  dfsPreOrder() {
    let results = [];
    function traverse(node){
      results.push(node.val);
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    }
      traverse(this.root)
      return results;
  }
  dfsPostOrder(){
    let results = [];
    function traverse(node){
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      results.push(node.val);
    }
      traverse(this.root)
      return results;
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.bfs())
console.log("PostOrder:", tree.dfsPostOrder())
console.log("PreOrder:", tree.dfsPreOrder())
