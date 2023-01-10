import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';
import {LinkedListNode} from "./DoubleLinkedList";
export class FIFO<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V> {

    setElement(key: K, value: V): K | undefined {

        // If the key already exists.
        if(this.getElement(key) !== undefined) {
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        // If the cache is full.
        if(this.cacheData.getSize() === this.cacheSize) {

            // Remove first key.
            const firstNodeToRemove =  this.cacheData.getHead();
            this.cacheData.remove(firstNodeToRemove);
            this.cacheMap.delete(firstNodeToRemove.element.key);

            // Update key, value.
            const newNode = new LinkedListNode({key, value});
            this.cacheData.push(newNode);
            this.cacheMap.set(key, newNode);

            // Return removed key.
            return firstNodeToRemove.element.key;
        }

        // Update Key, Value.
        const newNode = new LinkedListNode({key, value});
        this.cacheData.push(newNode);
        this.cacheMap.set(key, newNode);
        return;
    }
}

