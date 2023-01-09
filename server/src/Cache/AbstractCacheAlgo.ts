import { DoubleLinkedList, LinkedListNode } from "./DoubleLinkedList";
export interface ICacheAlgo<K, V> { 
    getElement(key: K): V | undefined;
    setElement(key: K,value: V):  K | undefined;
    removeElement(key: K): boolean;
}
export abstract class AbstractCacheAlgo<K,V>  {

    protected cacheData: DoubleLinkedList<{key: K,value: V}>; 
    protected cacheMap: Map< K , LinkedListNode<{key: K,value: V}> >;
    protected cacheSize: number;
    
    
    constructor(cacheSize: number){
        this.cacheData = new DoubleLinkedList<{key: K,value: V}>();
        this.cacheMap = new Map< K, LinkedListNode<{key: K,value: V}> >();
        this.cacheSize = cacheSize;
    }

    getElement(key: K): V | undefined {

        // Check if the key exists
        if(this.cacheMap.get(key)) {
            return this.cacheMap.get(key).element.value;
        }

        return undefined;
    }

    removeElement(key: K): boolean {
        
        // Check if the key exists
        if(this.cacheMap.get(key)){
            this.cacheData.remove(this.cacheMap.get(key));
            this.cacheMap.delete(key);
            return true;
        }

        return false;
    }
}
