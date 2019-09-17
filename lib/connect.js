import React, { useState, useEffect } from 'react';

import set from './public/set';
import ing from './public/ing';
import didMount from './public/didMount';
import willUnmount from './public/willUnmount';
import generateId from './utils/generateId';

import createStore from './createStore';
/* eslint-disable no-unused-vars*/
const poisonState = (store,id) => {
    !store.originalStore && (store = createStore(store));

    const [props, setState] = useState(store);
    const detach = store.attach(setState, id);

    useEffect( () => () => detach() );
};
/* eslint-enable no-unused-vars*/

export default (Component, Store) => staticProps => {
    const componentId = generateId();
    if (Array.isArray(Store)){
        Store.map(s => poisonState(s,componentId,Component));
    }else{
        poisonState(Store,componentId,Component);
    }
    
    return <Component
        {...staticProps}
        didMount={didMount(useEffect)}
        willUnmount={willUnmount(useEffect)}
        set={set(Store)}
        ing={ing(Store)} />;
};