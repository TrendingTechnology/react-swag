import isFunction from '../utils/isFunction';
import getKeys from '../utils/getKeys';

export default storeInterface => {
    const getCurrentState = () => getKeys(storeInterface)
        .filter( key => !isFunction(storeInterface[key]))
        .reduce((acc,key) => {
            (acc[key] = storeInterface[key]);
            return acc;
        } ,{});

    storeInterface.originalStore && Object.keys(storeInterface.originalStore.listeners)
        .map((key)=>{
            isFunction(storeInterface.originalStore.listeners[key])
            &&
            storeInterface.originalStore.listeners[key](getCurrentState());
        });
};