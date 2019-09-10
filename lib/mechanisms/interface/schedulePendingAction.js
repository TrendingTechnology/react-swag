
export default storeInterface => (key, calledWith = 'default', fn) => {
    const method = storeInterface.originalStore[key];
    const getOrInitPendingActions  = () => method.pendingActions = method.pendingActions || [];
    const addOneMorePendingAction = () => method.pendingActions.push(calledWith);

    getOrInitPendingActions();
    addOneMorePendingAction();
    fn();
};