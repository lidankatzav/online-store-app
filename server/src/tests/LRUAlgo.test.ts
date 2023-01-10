import { expect } from 'chai';
import { LRU } from '../Cache/LRU-class';

describe('LRU Cache Algorithm', () => {

  let lru: LRU<number, string>;

  beforeEach(() => {
    lru = new LRU<number, string>(3);
  });

  it('should set and get elements correctly', () => {
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    expect(lru.getElement(1)).to.equal('a');
    expect(lru.getElement(2)).to.equal('b');
    expect(lru.getElement(3)).to.equal('c');
  });

  it('should remove elements correctly', () => {
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    expect(lru.removeElement(2)).to.be.true;
    expect(lru.getElement(2)).to.be.undefined;
  });

  it('should return undefined for non-existent elements', () => {
    expect(lru.getElement(1)).to.be.undefined;
  });

  it('should remove LRU element when cache is full', () => {
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    lru.setElement(4, 'd');
    expect(lru.getElement(1)).to.be.undefined;
  });

  it('should update element to LRU when accessed', () => {
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    lru.getElement(2);
    lru.getElement(1);
    lru.setElement(4, 'd');
    expect(lru.getElement(3)).to.be.undefined;
    expect(lru.getElement(2)).to.equal('b');
  });
});
