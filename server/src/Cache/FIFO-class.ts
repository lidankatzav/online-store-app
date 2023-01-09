import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';

export class FIFO<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V> {


    setElement(key: K, value: V): K | undefined {

        // Check if the key already exists
        if(this.getElement(key) !== undefined) {
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        // Check if the cache is full
        if(this.keysArray.length === this.cacheSize) {
            const removedKey = this.keysArray.shift();
            this.cacheData.delete(removedKey);
            this.cacheData.set(key, value);
            this.keysArray.push(key);
            return removedKey;
        }

        // Update Key, Value
        this.cacheData.set(key, value);
        this.keysArray.push(key);
        return;
    }
}

