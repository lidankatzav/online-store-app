import { expect } from 'chai';
import { Random } from '../Cache/RANDOM-class';

describe('Random Cache Algorithm', () => {
    
    let cache: Random<string, number>;

    beforeEach(() => {
        cache = new Random<string, number>(3);
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
        expect(cache.removeElement('a')).to.be.false;
        expect(cache.getElement('a')).to.be.undefined;
        expect(cache.getElement('b')).to.equal(2);
    });
    
    it('should overwrite random element when full', () => {
        cache.setElement('a', 1);
        cache.setElement('b', 2);
        cache.setElement('c', 3);
        cache.setElement('d', 4);
        expect(cache.getElement('a')).to.be.oneOf([1, undefined]);
        expect(cache.getElement('b')).to.be.oneOf([2, undefined]);
        expect(cache.getElement('c')).to.be.oneOf([3, undefined]);
        expect(cache.getElement('d')).to.be.oneOf([4, undefined]);
    });
});