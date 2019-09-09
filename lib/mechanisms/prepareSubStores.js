import getKeys from '../utils/getKeys';
import isObject from '../utils/isObject';

export default ((store, $interface, createStoreInterface) => {
    getKeys(store)
        .filter(key=>isObject(store[key]))
        .forEach(key => $interface[key] = createStoreInterface(store[key]));
});