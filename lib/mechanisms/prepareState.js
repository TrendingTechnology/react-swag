import getKeys from '../utils/getKeys';
import isFunction from '../utils/isFunction';
import isObject from '../utils/isObject';

import defineProperty from './interface/defineProperty';

import broadcastChanges from './broadcastChanges';

const createPropertiesInterface = $interface => key  =>  defineProperty( $interface.originalStore, $interface, key, () => broadcastChanges($interface) );
const removeFunctionsAndObjects = store => k => !isFunction(store[k]) &&  !isObject(store[k]);

export default $interface => {
    getKeys($interface.originalStore)
        .filter( removeFunctionsAndObjects($interface.originalStore) )
        .map( createPropertiesInterface( $interface ));
};