import broadCastChanges from '../broadcastChanges';
import poisonedArray from './poisonedArray'

export default (store, acc, key, $interface) => {
    Object.defineProperty(acc,key,{
        get: () => {
            if (Array.isArray(store[key])){
                return poisonedArray(store[key],_=>broadCastChanges($interface()))
            }
            return store[key];
        },
        set: value => {
            if (value === store[key]) return value;
            store[key] = value;
            broadCastChanges($interface());
        },
        enumerable:true
    });
    return acc;
};