declare class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    constructor(value: T);
}
declare class LinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    constructor(value: any);
    insert(value: any): void;
    contains(value: T): boolean | "List is empty" | undefined;
    removeTail(): void;
    isHead(): void;
    isTail(): void;
}
declare let list: LinkedList<unknown>;
