class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if (!this.head) return null;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head)
            this.head = newNode;
        this.tail = this.head;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return "valid operation";
        }
        return "sorry no index lives here";
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return "attempt out of bound";
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prevIndex = this.get(index - 1)
        let temp = prevIndex.next;
        prevIndex.next = newNode;
        newNode.next = temp;
        this.length++;
        return "this works"
    }

    remove(index) {
        if (index < 0 || index >= this.length) return "attempt out of bound";
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
}

//     BASIC METHOD TO TRAVERSE THE LIST
//     traverse() {
//         let current = this.head;
//         while(current) {
//             console.log(current.val);
//             current = current.next;
//         }
//     }

let list = new singlyLinkedList()
list.push("ALIFE")
list.push("BBC")
list.push("CARHARTT")
list.push("DKNY")

// list.push("GOODBYE")// let first = new Node("Hi")
// first.next = new Node('There')
// first.next.next = new Node("how")
// first.next.next.next = new Node('are')