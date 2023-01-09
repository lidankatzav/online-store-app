
export class LinkedListNode<T> {

    public value: T;
    public next: LinkedListNode<T>;
    public prev: LinkedListNode<T>;

    constructor(value: T,  prev: LinkedListNode<T> = null, next: LinkedListNode<T> = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

export class DoubleLinkedList<T>  {

    private head: LinkedListNode<T>;
    private tail: LinkedListNode<T>;
    private size: number;

    constructor(head: LinkedListNode<T> = null) {
        this.head = head;
        this.tail = this.head? this.head: null;
        this.size = this.head? 1: 0;
    }

    getSize(): number {
        return this.size;
    }

    getHead(): LinkedListNode<T> {
        return this.head;
    }
    
    getTail(): LinkedListNode<T> {
        return this.tail;
    }
    
    push(node: LinkedListNode<T>): void {

        if(this.head === null) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }

        const prevTail = this.tail;
        this.tail = node;
        prevTail.next = this.tail;
        this.tail.prev = prevTail;
        this.size += 1;
        return;
    }

    remove(node: LinkedListNode<T>): void {

        if(this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }

        if(node === this.head) {
            const nextHead = this.head.next;
            this.head = nextHead;
            this.head.prev = null;
            this.size -= 1;
            return;
        }

        if(node === this.tail) {
            const prevTail = this.tail.prev;
            prevTail.next = null;
            this.tail = prevTail;
            this.size -= 1;
            return;
        }

        const prevOfNode = node.prev;
        const nextOfNode = node.next;
        prevOfNode.next = nextOfNode;
        nextOfNode.prev = prevOfNode;
        this.size -= 1;
        return;
    }
    
   print(): void {
        let currentNode = this.head;
        console.log(this.size);
        while(currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        return;
   }

}
