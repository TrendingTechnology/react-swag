import getAllMethodKeys from './getAllMethodKeys';
import restrictKeys from './restrictKeys';

export default ((store) => {
    const keys = Object.keys(store);
    const classMethods = getAllMethodKeys(store);
    return [...keys, ...classMethods]
        .filter(k=>!restrictKeys.includes(k));
});