class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node (val)
    if (this.root === null) {
      this.root = newNode;
      return this
    } else {
      let current = this.root;
      while(true) {
        if (current.val === val) return "duplicate entries"
        if (val < current.val) {
          if(current.left === null) {
            current.left = newNode
          } else {
            current = current.next;
            return this;
          }
        } else if (val > current.val) {
          if (val < current.val) {
            if(current.left === null) {
              current.left = newNode
            } else {
              current = current.next;
              return this;
            }
          }
        }
      }
    }
  }
  bfs() {
    let node = this.root;
    let data = [];
    queue = [];
    queue.push(this.root)
    while(queue.length){
      node = queue.shift()
      data.push(node);
      if(node.left) queue.push(node.left)
      if(node.right)queue.push(node.right)
    }
    return data
  }
}

let tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(20)
