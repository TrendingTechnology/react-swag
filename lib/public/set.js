export default ( store => (key, value) => {
    if (value === undefined){
        return e => {
            if (e.target) return store[key] = e.target.value;
            return store[key] = value;
        };
    }
    store[key] = undefined;
});