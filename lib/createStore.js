
import isFunction from './utils/isFunction';
import isObject from './utils/isObject';
import getKeys from './utils/getKeys';

import defineProperty from './mechanisms/interface/defineProperty';
import prepareSubStores from './mechanisms/prepareSubStores';
import prepareTraps from './mechanisms/prepareTraps';
import attach from './mechanisms/interface/attach';
import registerPropBeingUsed from './mechanisms/interface/registetrPropBeingUsed';
import schedulePendingAction from './mechanisms/interface/schedulePendingAction';
import deschedulePendingAction from './mechanisms/interface/deschedulePendingAction';

const attachListenersInterface = storeInterface => {
    storeInterface.attach =                  attach(storeInterface);
    storeInterface.registerPropBeingUsed =   registerPropBeingUsed(storeInterface);
    storeInterface.schedulePendingAction =   schedulePendingAction(storeInterface);
    storeInterface.deschedulePendingAction = deschedulePendingAction(storeInterface);
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