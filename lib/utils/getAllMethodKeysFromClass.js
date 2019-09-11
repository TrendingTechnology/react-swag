import restrictKeys from './restrictKeys';
import isObject from './isObject';

export default obj => {
    if (isObject(obj)){
        let methods = new Set();
        while ((obj = Reflect.getPrototypeOf(obj))) {
            let keys = Reflect.ownKeys(obj);
            keys.forEach((k) => methods.add(k));
        }
        return [...methods].filter(k=>!restrictKeys.includes(k));
    }
    return [];
};