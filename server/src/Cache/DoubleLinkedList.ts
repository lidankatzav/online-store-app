
export class LinkedListNode<T> {

    public element: T;
    public next: LinkedListNode<T>;
    public prev: LinkedListNode<T>;

    constructor(element: T,  prev: LinkedListNode<T> = null, next: LinkedListNode<T> = null) {
        this.element = element;
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

        // Add a node when the list is empty.
        if(this.head === null) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }

        // Add a node to list with at least one node.
        const prevTail = this.tail;
        this.tail = node;
        prevTail.next = this.tail;
        this.tail.prev = prevTail;
        this.size += 1;
        return;
    }

    remove(node: LinkedListNode<T>): void {

        // When the list is empty.
        if(this.size === 0) {
            return;
        }

        // Remove from the list that contains only one node.
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }
        
        // Remove the head of the list.
        if(node === this.head) {
            const nextHead = this.head.next;
            this.head = nextHead;
            this.head.prev = null;
            this.size -= 1;
            return;
        }

        // Remove the tail of the list.
        if(node === this.tail) {
            const prevTail = this.tail.prev;
            prevTail.next = null;
            this.tail = prevTail;
            this.size -= 1;
            return;
        }

        // Remove from the list that contains at least two nodes.
        const prevOfNode = node.prev;
        const nextOfNode = node.next;
        prevOfNode.next = nextOfNode;
        nextOfNode.prev = prevOfNode;
        this.size -= 1;
        return;
    }

    
}
