declare class Stack {
    _storage: {
        [key: number]: any;
    };
    _length: number;
    constructor();
    push(value: any): void;
    pop(): any;
    peek(): void;
}
declare const myStack: Stack;
