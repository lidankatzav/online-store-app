//random
import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';
import {randomArrIndex} from './AlgoFunctions';
import {LinkedListNode} from "./DoubleLinkedList";
export class Random<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V>{
    
    setElement(key: K, value: V): K | undefined {
        
        // If the key already exists.
        if(this.getElement(key) !== undefined){
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        // If the cache is full.
        if(this.cacheData.getSize() === this.cacheSize){

            // Find random key to remove.
            const keyToReplace = Array.from(this.cacheMap.keys())[randomArrIndex(this.cacheSize)];

            // Remove it and update cache.
            const nodeToRemove = this.cacheMap.get(keyToReplace);
            this.cacheData.remove(nodeToRemove);
            this.cacheMap.delete(keyToReplace);

            // Insert new key to cache.
            const newNode = new LinkedListNode({key, value});
            this.cacheData.push(newNode);
            this.cacheMap.set(key, newNode);

            // Return key that was deleted.
            return keyToReplace;  
        }

        // Update Key, Value.
        const newNode = new LinkedListNode({key, value});
        this.cacheData.push(newNode);
        this.cacheMap.set(key, newNode);
        return;
    }

}

