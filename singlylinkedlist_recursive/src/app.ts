class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  constructor(value: any) {
    this.head = new LinkedListNode(value);
    this.tail = this.head;
  }

  insert(value: any) {
    let newNode = new LinkedListNode(value);
    if (this.tail === null) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
      return
    }
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  contains(value: T) {
    if (this.tail === null) {
      return "List is empty"
    }

    const _contains = (value: T, currNode: LinkedListNode<T>): boolean => {
      if (currNode.value === value) {
        return true;
      }
      if (currNode.next === null) {
        return false
      }
      return _contains(value, currNode.next);
    }
    if (this.head) {
      return _contains(value, this.head);
    }
  }

  removeTail() {
    if (this.head === null) {
      throw "List is empty";
    }
    else if (this.head?.next === null) {
      this.head = null
      this.tail = null
      return
    }

    const findNodeBeforeTail = (currNode: LinkedListNode<T>): LinkedListNode<T> => {
      if (currNode.next === this.tail) {
        return currNode;
      }
      return findNodeBeforeTail(currNode.next!);
    }

    const nodeBeforeTail = findNodeBeforeTail(this.head);
    nodeBeforeTail.next = null;
    this.tail = nodeBeforeTail;
  }

  isHead(node: LinkedListNode<T>) {
    return node === this.head

  }
  isTail(node: LinkedListNode<T>) {
    return node === this.tail

  }

}

let list = new LinkedList(5);
list.insert(9);
list.insert(3);
list.removeTail();
list.removeTail();
list.removeTail();
list.insert(9);
console.log(list)
