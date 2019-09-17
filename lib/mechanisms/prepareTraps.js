import getKeys from '../utils/getKeys';
import isFunction from '../utils/isFunction';

export default ($interface, refreshFunction, functionTrap) => {
    getKeys($interface.originalStore)
        .filter(key=>isFunction($interface.originalStore[key]))
        .map( key => {
            $interface[key] = functionTrap( $interface.originalStore[key], $interface, key, refreshFunction);
            $interface[key].originalMethod = $interface.originalStore[key];
        });
};