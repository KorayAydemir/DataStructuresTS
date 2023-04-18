class Queue {
  _storage: { [key: number]: any };
  _length: number;
  _headIndex: number;
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(value: any) {
    this._storage[this._length + this._headIndex] = value;
    this._length++;
  }

  dequeue() {
    delete this._storage[this._headIndex]
    this._length--;
    this._headIndex++
  }
  peek() {
    console.log(this._storage[this._headIndex])
  }
}

const myQueue = new Queue;
myQueue.enqueue(4);
myQueue.enqueue(8);
myQueue.enqueue(5)
myQueue.peek() // prints 4
myQueue.enqueue(9)
myQueue.dequeue()
myQueue.dequeue()
myQueue.enqueue(2)
console.log(myQueue)


