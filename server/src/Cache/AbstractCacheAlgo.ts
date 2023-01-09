
export interface ICacheAlgo<K, V> { 
    getElement(key: K): V | undefined;
    setElement(key: K,value: V):  K | undefined;
    removeElement(key: K): boolean;
}

export abstract class  AbstractCacheAlgo<K,V>  {

    protected cacheData: Map<K,V>;
    protected cacheSize: number;
    protected keysArray: Array<K>;
    
    constructor(cacheSize: number = 5){
        this.cacheData = new Map<K, V>();
        this.cacheSize = cacheSize;
        this.keysArray = new Array<K>()
    }

    getElement(key: K): V | undefined {
        return this.cacheData.get(key);
    }

    removeElement(key: K): boolean {
        
        // Check if the key  exists
        if(this.getElement(key) !== undefined){
            this.cacheData.delete(key);
            let keyIndex = this.keysArray.indexOf(key);
            this.keysArray.splice(keyIndex, 1);
            return true;
        }

        return false;
    }
}
