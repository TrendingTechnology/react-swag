import React, { useState, useEffect } from 'react';

import createStore from './createStore';

import set from './public/set';
import ing from './public/ing';
import didMount from './public/didMount';
import willUnmount from './public/willUnmount';

import restrictKeys from './utils/restrictKeys';
import generateId from './utils/generateId';
import isFunction from './utils/isFunction';

import broadcastChanges from './mechanisms/broadcastChanges';


const getActions = store => Object.keys(store)
.filter((key)=>!restrictKeys.includes(key))
.reduce((acc,key)=>{
    if(isFunction(store[key])) acc[key] = store[key] ;
    return acc;
},{});

const getObjectPropertyWithSetters = store => Object.keys(store)
        .filter((key)=>!restrictKeys.includes(key))
        .reduce((acc,key)=>{
            if (!isFunction(store[key])){
                acc[key] = store[key];
                Object.defineProperty(acc,key,{
                    get: () => {
                        store.registerPropBeingUsed(key,id,broadcastChanges(store));
                        return store[key];
                    }
                });
            }
            return acc;
        },{})


const poisonState = (store,id) => {
    if (!store.originalStore)
        store = createStore(store);

    const properties = getObjectPropertyWithSetters(store);
    const actions = getActions(props);

    /* eslint-disable */
    const [stateProp, setState] = useState(properties);
    /* eslint-enable */

    const detach = store.attach(setState, id);

    useEffect( () => () => detach() );

    return {store, actions};
};

export default (Component, Store) => staticProps => {
    const componentId = generateId();
    const { actions, store } = poisonState(Store,componentId,Component);

    return <Component
        {...staticProps}
        store={store}
        actions={actions}
        didMount={didMount(useEffect)}
        willUnmount={willUnmount(useEffect)}
        set={set(Store)}
        ing={ing(Store)} />;
};