import React, { useState, useEffect } from 'react';

import set from './public/set';
import ing from './public/ing';
import didMount from './public/didMount';

import restrictKeys from './utils/restrictKeys';
import generateId from './utils/generateId';
import isFunction from './utils/isFunction';

const poisonState = (store,id) => {
    const storeShell = Object.keys(store)
        .filter((key)=>!restrictKeys.includes(key))
        .reduce((acc,key)=>{
            if (!isFunction(store[key])){
                acc[key] = store[key];
                Object.defineProperty(acc,key,{
                    get: () => {
                        store.registerPropBeingUsed(key,id);
                        return store[key];
                    }
                });
            }
            return acc;
        },{});

    const actions = Object.keys(store)
        .filter((key)=>!restrictKeys.includes(key))
        .reduce((acc,key)=>{
            if(isFunction(store[key])) acc[key] = store[key] ;
            return acc;
        },{});

    const [stateProp, setState] = useState(storeShell);
    const detach = store.attach(setState, id);

    useEffect( () => () => detach() );

    return {store  : {...stateProp}, actions};
};

export default (Component, Store) => staticProps => {
    const componentId = generateId();
    const { actions, store } = poisonState(Store,componentId,Component);

    return <Component
        {...staticProps}
        store={store}
        actions={actions}
        didMount={didMount}
        set={set(Store)}
        ing={ing(Store)} />;
};