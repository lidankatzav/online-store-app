
export interface ICacheAlgo<K, V> { 
    getElement(key: K): V | undefined;
    setElement(key: K,value: V):  K | undefined;
    removeElement(key: K): boolean;
}

export abstract class  AbstractCacheAlgo<K,V>  {
    public cacheData: Map<K,V>;
    protected cacheSize: number;
    
    constructor(cacheSize: number = 5){
        this.cacheData = new Map<K, V>();
        this.cacheSize = cacheSize;
    }

    getElement(key: K): V | undefined {
        return this.cacheData.get(key);
    }

}
