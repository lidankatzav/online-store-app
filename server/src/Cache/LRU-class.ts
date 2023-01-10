import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';
import {LinkedListNode} from "./DoubleLinkedList";

export class LRU<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V> {

    getElement(key: K): V | undefined {

        // If the key exists.
        if(this.cacheMap.get(key)) {

            // Update key to be the tail at the double-linked-list.
            const nodeOfKey = this.cacheMap.get(key);
            this.cacheData.remove(nodeOfKey);
            this.cacheData.push(nodeOfKey);

            // Return value of the key.
            return nodeOfKey.element.value;
        }

        return undefined;
    }

    setElement(key: K, value: V): K | undefined {

         // If the key already exists.
         if(this.cacheMap.get(key) !== undefined) {
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        // If the cache is full.
        if(this.cacheData.getSize() === this.cacheSize) {

            // Remove LRU.
            const LRUNodeToRemove =  this.cacheData.getHead();
            this.cacheData.remove(LRUNodeToRemove);
            this.cacheMap.delete(LRUNodeToRemove.element.key);

            // Update key, value.
            const newNode = new LinkedListNode({key, value});
            this.cacheData.push(newNode);
            this.cacheMap.set(key, newNode);

            // Return removed key.
            return LRUNodeToRemove.element.key;
        }

        // Update key, value.
        const newNode = new LinkedListNode({key, value});
        this.cacheData.push(newNode);
        this.cacheMap.set(key, newNode);
        return;
    }
};