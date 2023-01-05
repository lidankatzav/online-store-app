import { expect } from 'chai';
import { FIFO } from '../Cache/FIFO-class';

describe('FIFO Cache Algorithm', () => {
    
  let cache: FIFO<string, number>;

  beforeEach(() => {
    cache = new FIFO<string, number>(3);
  });

  it('should set and get elements correctly', () => {
    cache.setElement('a', 1);
    cache.setElement('b', 2);
    expect(cache.getElement('a')).to.equal(1);
    expect(cache.getElement('b')).to.equal(2);
    expect(cache.setElement('a', 3)).to.equal('a');
  });

  it('should remove elements correctly', () => {
    cache.setElement('a', 1);
    cache.setElement('b', 2);
    expect(cache.removeElement('a')).to.be.true;
    expect(cache.getElement('a')).to.be.undefined;
    expect(cache.getElement('b')).to.equal(2);
  });

  it('should overwrite least recently added element when full', () => {
    cache.setElement('a', 1);
    cache.setElement('b', 2);
    cache.setElement('c', 3);
    cache.setElement('d', 4);
    expect(cache.getElement('a')).to.be.undefined;
    expect(cache.getElement('b')).to.equal(2);
    expect(cache.getElement('c')).to.equal(3);
    expect(cache.getElement('d')).to.equal(4);
  });

});