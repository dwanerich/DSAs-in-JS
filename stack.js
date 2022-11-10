class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;

        }
        // return this.first.val;
        // return ++this.size;
        console.log(++ this.size)
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.first === null;
        }
        this.first = this.first.next;
        // return temp.val
        console.log(temp.val)
    }
}

let bigStack = new Stack()
bigStack.push('lil cease')
bigStack.push('lil kim')
bigStack.push('junior mafia')
bigStack.push('the commission')

bigStack.pop()
bigStack.pop()
