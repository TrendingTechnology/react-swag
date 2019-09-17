import poisonedArray from './poisonedArray';

export default (store, acc, key, refreshFunction) => {
    Object.defineProperty(acc,key,{
        get: () => {
            if (Array.isArray(store[key])){
                return poisonedArray(store[key], refreshFunction);
            }
            return store[key];
        },
        set: value => {
            if (value === store[key]) return value;
            store[key] = value;
            refreshFunction();
        },
        enumerable:true
    });

    return acc;
};