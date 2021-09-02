class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return "nothing to pop";
        if (this.length === 1) {
            let newHead = null, newTail = null;
            this.head = newHead;
            this.tail = newTail;
            this.length--;
            return "you popped the last one";
        }
        let newTail = this.tail.prev;
        this.tail = null;
        this.tail = newTail;
        this.length--;
        return `${this.tail.val} is your new tail`;
    }
}

let list = new doublyLinkedList
list.push(3);
list.push(6);
list.push(9);
