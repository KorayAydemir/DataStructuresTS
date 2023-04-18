declare class Queue {
    _storage: {
        [key: number]: any;
    };
    _length: number;
    _headIndex: number;
    constructor();
    enqueue(value: any): void;
    dequeue(): void;
    peek(): void;
}
declare const myQueue: Queue;
