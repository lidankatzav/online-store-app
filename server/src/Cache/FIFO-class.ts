import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';

export class FIFO<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V> {

    #orderArray: K[] = new Array<K>(this.cacheSize);

    setElement(key: K, value: V): K | undefined {

        // Check if the key already exists
        if(this.getElement(key) !== undefined) {
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        // Check if the cache is full
        if(this.#orderArray.length === this.cacheSize) {
            const removedKey = this.#orderArray.shift();
            this.cacheData.delete(removedKey);
            this.cacheData.set(key, value);
            this.#orderArray.push(key);
            return removedKey;
        }

        // Update Key, Value
        this.cacheData.set(key, value);
        this.#orderArray.push(key);
        return;
    }

    removeElement(key: K): boolean {

        // Check if the key  exists
        if(this.getElement(key) !== undefined) {
            this.cacheData.delete(key);
            this.#orderArray.splice(this.#orderArray.indexOf(key), 1);
            return true;
        }
        
        return false;
    }

}
