import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';

class FIFO<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V> {

    #orderArray: K[] = new Array<K>(this.cacheSize);

    setElement(key: K, value: V): K | undefined {

        if(this.getElement(key) !== undefined) {
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        if(this.#orderArray.length === this.cacheSize) {
            const removedKey = this.#orderArray.shift();
            this.cacheData.delete(removedKey);
            this.cacheData.set(key, value);
            this.#orderArray.push(key);
            return removedKey;
        }

        this.cacheData.set(key, value);
        this.#orderArray.push(key);
        return;
    }

    removeElement(key: K): boolean {
        if(this.getElement(key) !== undefined) {
            this.cacheData.delete(key);
            this.#orderArray.splice(this.#orderArray.indexOf(key), 1);
            return true;
        }
        return false;
    }

}

const fifo1 = new FIFO(5);

fifo1.setElement(0, 'hello0');
fifo1.setElement(1, 'hello1');
fifo1.setElement(2, 'hello2');
fifo1.setElement(3, 'hello3');
fifo1.setElement(4, 'hello4');
console.log(fifo1.setElement(4, 'hello4'));
console.log(fifo1.setElement(5, 'hello4'));
console.log(fifo1.getElement(2));
console.log(fifo1.cacheData);