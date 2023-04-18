"use strict";
class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }
    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }
    pop() {
        const lastVal = this._storage[this._length - 1];
        this._storage[this._length - 1] = undefined;
        this._length--;
        return lastVal;
    }
    peek() {
        console.log(this._storage[this._length - 1]);
    }
}
const myStack = new Stack();
myStack.push(9);
myStack.push(7);
myStack.pop();
myStack.peek();
myStack.push(4);
myStack.peek();
console.log(myStack);
