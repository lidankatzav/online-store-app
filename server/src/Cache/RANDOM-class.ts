//random
import {ICacheAlgo, AbstractCacheAlgo} from './AbstractCacheAlgo';
import {randomArrIndex} from './AlgoFunctions';


export class Random<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V>{
    
    setElement(key: K, value: V): K | undefined {
        
        // Check if the key already exists
        if(this.getElement(key) !== undefined){
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }

        // Check if the cache is full
        if(this.cacheData.size === this.cacheSize){

            //find random key to remove
            const keyToReplace = this.keysArray[randomArrIndex(this.cacheSize)];

            //remove it and update keysArr
            this.cacheData.delete(keyToReplace);
            let keyToReplaceIndex = this.keysArray.indexOf(keyToReplace);
            this.keysArray.splice(keyToReplaceIndex, 1);

            //insert new key to cache and keysArr
            this.cacheData.set(key, value);
            this.keysArray.push(key);
            
            //return key that was deleted
            return keyToReplace;
            
        }

        // Update Key, Value
        this.cacheData.set(key, value);
        this.keysArray.push(key);
        return;
    }

}

