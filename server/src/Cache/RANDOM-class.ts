//random
import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';
import {randomArrIndex} from './AlgoFunctions';


export class Random<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V>{

    //array that contains all cacheData keys
    #keysArr: K[] = new Array<K>(this.cacheSize);

    
    setElement(key: K, value: V): K {
        
        // Check if the key already exists
        if(this.getElement(key) !== undefined){
            this.cacheData.set(key, value);
            return key;
        }

        // Check if the cache is full
        if(this.cacheData.size === this.cacheSize){

            //find random key to remove
            let keyToReplace = this.#keysArr[randomArrIndex(this.cacheSize)];

            //remove it and update keysArr
            this.cacheData.delete(keyToReplace);
            let keyToReplaceIndex = this.#keysArr.indexOf(keyToReplace);
            this.#keysArr.splice(keyToReplaceIndex, 1);

            //insert new key to cache and keysArr
            this.cacheData.set(key, value);
            this.#keysArr.push(key);
            
            //return key that was deleted
            return keyToReplace;
            
        }

        // Update Key, Value
        this.setElement(key, value);
        this.#keysArr.push(key);

    }

    removeElement(key: K): boolean {
        
        // Check if the key  exists
        if(this.getElement(key) !== undefined){
            this.cacheData.delete(key);
            let keyIndex = this.#keysArr.indexOf(key);
            this.#keysArr.splice(keyIndex, 1);
            return true;
        }

        return false;
    }
}