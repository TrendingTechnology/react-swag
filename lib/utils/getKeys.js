import getAllMethodKeysFromClass from './getAllMethodKeysFromClass';
import restrictKeys from './restrictKeys';

export default ((store) => {
    const keys = Object.keys(store);
    const classMethods = getAllMethodKeysFromClass(store);
    return [...keys, ...classMethods]
        .filter(k=>!restrictKeys.includes(k));
});