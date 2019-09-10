import getKeys from '../utils/getKeys';
import isFunction from '../utils/isFunction';

import functionTrap from '../mechanisms/functionTrap';

export default (store, $interface, fn) => {
    getKeys(store)
        .filter(key=>isFunction(store[key]))
        .forEach(key => {
            $interface[key] = functionTrap( store[key], $interface, key ,fn);
            $interface[key].originalMethod = store[key];
        });
};