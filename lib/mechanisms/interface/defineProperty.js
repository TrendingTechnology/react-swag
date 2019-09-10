import poisonedArray from './poisonedArray';

export default (store, acc, key, fn) => {
    Object.defineProperty(acc,key,{
        get: () => {
            if (Array.isArray(store[key])){
                return poisonedArray(store[key], fn);
            }
            return store[key];
        },
        set: value => {
            if (value === store[key]) return value;
            store[key] = value;
            fn();
        },
        enumerable:true
    });
    return acc;
};