"use strict";
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new LinkedListNode(value);
        this.tail = this.head;
    }
    insert(value) {
        let newNode = new LinkedListNode(value);
        if (this.tail === null) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    contains(value) {
        if (this.tail === null) {
            return "List is empty";
        }
        const _contains = (value, currNode) => {
            if (currNode.value === value) {
                return true;
            }
            if (currNode.next === null) {
                return false;
            }
            return _contains(value, currNode.next);
        };
        if (this.head) {
            return _contains(value, this.head);
        }
    }
    removeTail() {
        var _a;
        if (this.head === null) {
            throw "List is empty";
        }
        else if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) === null) {
            this.head = null;
            this.tail = null;
            return;
        }
        const findNodeBeforeTail = (currNode) => {
            if (currNode.next === this.tail) {
                return currNode;
            }
            return findNodeBeforeTail(currNode.next);
        };
        const nodeBeforeTail = findNodeBeforeTail(this.head);
        nodeBeforeTail.next = null;
        this.tail = nodeBeforeTail;
    }
    isHead() {
    }
    isTail() {
    }
}
let list = new LinkedList(5);
list.insert(9);
list.insert(3);
list.removeTail();
list.removeTail();
list.removeTail();
list.insert(9);
list.removeTail();
console.log(list);
