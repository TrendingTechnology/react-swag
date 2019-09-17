export default storeInterface => (fn, id) => {
    const store = storeInterface.originalStore;
    const getOrInitListeners = () => {
        if(!store.listeners)
            Object.defineProperty(store,'listeners',{
                enumerable: false,
                value: {}
            });
    };
    const setUpdateFunction = (fn,id) => store.listeners[id] = fn;
    const cleanUpListeners = () => store.listeners && delete store.listeners[id];

    getOrInitListeners();
    setUpdateFunction(fn,id);
    return cleanUpListeners;
};