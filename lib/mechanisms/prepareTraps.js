import getKeys from '../utils/getKeys';
import isFunction from '../utils/isFunction';

export default (store, $interface, refreshFunction, functionTrap) => {
    getKeys(store)
        .filter(key=>isFunction(store[key]))
        .forEach(key => {
            $interface[key] = functionTrap( store[key], $interface, key, refreshFunction);
            $interface[key].originalMethod = store[key];
        });
};