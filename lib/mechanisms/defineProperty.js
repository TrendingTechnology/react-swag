import broadCastChanges from './broadcastChanges';

export default (store, acc, key, $interface) => {
    Object.defineProperty(acc,key,{
        get: () => store[key],
        set: value => {
            if (value === store[key]) return value;
            store[key] = value;
            broadCastChanges($interface());
        },
        enumerable:true
    });
    return acc;
};