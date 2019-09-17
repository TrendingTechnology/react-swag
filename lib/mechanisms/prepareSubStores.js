import getKeys from '../utils/getKeys';
import isObject from '../utils/isObject';
import broadcastChanges from './broadcastChanges';

export default (($interface, createStoreInterface) => {
    const detachers = getKeys($interface.originalStore)
        .filter(key=>isObject($interface.originalStore[key]))
        .map((key) => {
            $interface[key] = createStoreInterface($interface.originalStore[key]);
            $interface[key].attach(()=>broadcastChanges($interface),'key');
        });
    return detachers;
});