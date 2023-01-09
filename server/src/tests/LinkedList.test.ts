import { expect } from 'chai';
import { DoubleLinkedList, LinkedListNode } from '../Cache/Linkedlist';

describe('DoubleLinkedList', () => {
  let list: DoubleLinkedList<number>;

  beforeEach(() => {
    list = new DoubleLinkedList<number>();
  });

  it('should be empty', () => {
    expect(list.getSize()).to.equal(0);
    expect(list.getHead()).to.be.null;
    expect(list.getTail()).to.be.null;
  });

  it('should add a node to the list', () => {
    const node = new LinkedListNode(1);
    list.push(node);
    expect(list.getSize()).to.equal(1);
    expect(list.getHead()).to.equal(node);
    expect(list.getTail()).to.equal(node);
  });

  it('should add multiple nodes to the list', () => {
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    list.push(node1);
    list.push(node2);
    list.push(node3);
    expect(list.getSize()).to.equal(3);
    expect(list.getHead()).to.equal(node1);
    expect(list.getTail()).to.equal(node3);
  });

  it('should remove a node from the list', () => {
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    list.push(node1);
    list.push(node2);
    list.push(node3);
    list.remove(node2);
    expect(list.getSize()).to.equal(2);
    expect(list.getHead()).to.equal(node1);
    expect(node1.next).to.equal(node3);
    expect(node3.prev).to.equal(node1);
  });

  it('should remove the getHead and getTail node from the list', () => {
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    list.push(node1);
    list.push(node2);
    list.remove(node1);
    expect(list.getSize()).to.equal(1);
    expect(list.getHead()).to.equal(node2);
    expect(list.getTail()).to.equal(node2);
    list.remove(node2);
    expect(list.getSize()).to.equal(0);
    expect(list.getHead()).to.be.null;
    expect(list.getTail()).to.be.null;
  });
});
