interface ICacheAlgo<K, V> { 
    getElement(key: K): V | undefined;
    setElement(key: K,value: V):  K | undefined;
    removeElement(key: K): boolean;
}

abstract class  AbstractCacheAlgo implements ICacheAlgo<K,V> {
    key: K;
    value: V;
    #cacheLimit = 5;
    #cache: {};
    
    constructor(){
        this.#cache = {};
    }
    
    getElement(key: K): V | undefined{
        return undefined
    }

    setElement(key: K,value: V):  K | undefined{
        return undefined
    }


    removeElement(key: K): boolean{
        return undefined
    }
}

