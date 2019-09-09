
import isFunction from './utils/isFunction';
import isObject from './utils/isObject';
import getKeys from './utils/getKeys';

import defineProperty from './mechanisms/defineProperty';
import prepareSubStores from './mechanisms/prepareSubStores';
import broadCastChanges from './mechanisms/broadcastChanges';
import prepareTraps from './mechanisms/prepareTraps';

const attachListenersInterface = (storeInterface) => {

    storeInterface.attach = (fn, id) => {
        const store = storeInterface.originalStore;
        const getOrInitListeners = () => store.listeners = store.listeners || {};
        const setUpdateFunction = (fn,id) => store.listeners[id] = fn;
        const cleanUpListeners = () => store.listeners && delete store.listeners[id];

        getOrInitListeners();
        setUpdateFunction(fn,id);
        return cleanUpListeners;
    };

    storeInterface.registerPropBeingUsed = (key,id)=> storeInterface[key].originalStore && storeInterface[key].attach( () => broadCastChanges(storeInterface),id);

    storeInterface.schedulePendingAction = (key, calledWith = 'default') => {
        const method = storeInterface.originalStore[key];
        const getOrInitPendingActions  = () => method.pendingActions = method.pendingActions || [];
        const addOneMorePendingAction = () => method.pendingActions.push(calledWith);

        getOrInitPendingActions();
        addOneMorePendingAction();
        broadCastChanges(storeInterface);
    };

    storeInterface.deschedulePendingAction = (key, calledWith = 'default') => {
        const method = storeInterface.originalStore[key];
        const uncalledOnly = cw => (calledWith!==cw);
        const justUncalledPendingActions = () => method.pendingActions.filter(uncalledOnly);
        
        method.pendingActions = justUncalledPendingActions();

        const noMorePendingActions = !method.pendingActions[0];
        const deletePendingActions = () => delete method.pendingActions;
        
        noMorePendingActions && deletePendingActions();

        return broadCastChanges(storeInterface);
    };
};

const createStoreInterface = store => {
    const removeFunctionsAndObjects = k => !isFunction(store[k]) &&  !isObject(store[k]);
    const createPropertiesInterface = (acc,key) => defineProperty( store, acc, key, () => $interface );

    const $interface = getKeys(store)
        .filter( removeFunctionsAndObjects )
        .reduce( createPropertiesInterface,{});

    prepareTraps(store, $interface);
    prepareSubStores(store, $interface, createStoreInterface);
    $interface.originalStore = store;
    attachListenersInterface($interface);

    return $interface;
};


export default createStoreInterface;