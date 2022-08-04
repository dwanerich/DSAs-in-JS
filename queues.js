class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val)
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
        this.last = newNode;
    }
    this.size++
    return this.first;
  }

  dequeue(){
  if (!this.size) return 'empty queue';
  let newFirst = this.first.next;
  let temp = this.first;
  this.first = newFirst
    this.size--
    return temp
  }
}

let route = new Queue
route.enqueue('wake up')
route.enqueue('shower')
route.enqueue('coffee')

