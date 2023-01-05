export interface ICacheAlgo<K, V> { 
    getElement(key: K): V | undefined;
    setElement(key: K,value: V):  K | undefined;
    removeElement(key: K): boolean;
}

export abstract class  AbstractCacheAlgo<K,V>  {
    #cacheData: Map<K,V>;
    #cacheSize: number;
    
    constructor(cacheSize: number = 10){
        this.#cacheData = new Map<K, V>();
        this.#cacheSize = cacheSize;
    }
}
