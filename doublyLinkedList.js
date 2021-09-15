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
            this.head = null; this.tail = null;
            this.length--;
            return "you popped the last node";
        }
        let newTail = this.tail.prev;
        this.tail = null;
        this.tail = newTail;
        newTail.next = null;
        this.length--; return `${this.tail.val} is your new tail`;
    }

    shift() {
        if (this.length === 0) return "nothing to shift";
        if (this.length === 1) {
            this.head = null; this.tail = null;
            this.length--;
            return "last node has been removed";
        }
        let newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
        this.length--;
        return this;
    }

    unshift(val) {
        let newHead = new Node(val);

        if (this.length === 0) {
            this.head = newHead; this.tail = newHead;
            this.length++;
            return this;
        }
        this.head.prev = newHead;
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this;
    }

    get(index) {
        let current, count;
        if (index < 0 || index >= this.length) return "out of bounce";
        if (index <= this.length / 2) {
            count = 0
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return "out of bounce";
        if (index === 0) return this.unshift(val);
        if (index = this.length) return this.push(val)

        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next;

        prevNode.next = newNode; newNode.prev = prevNode;
        newNode.next = nextNode; nextNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= length) return "out of bounce"
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let prevNode = removedNode.prev, nextNode = removedNode.next;
        removedNode = null;
        nextNode.prev = prevNode; prevNode.next = nextNode;
        this.length--;
        console.log(this.get(index).prev)
        return this;

    }
}

let list = new doublyLinkedList
list.push("Maxwell");
list.push("Celly");
list.push("Robbie");
list.push("Ye");
list.push("Dwane")
