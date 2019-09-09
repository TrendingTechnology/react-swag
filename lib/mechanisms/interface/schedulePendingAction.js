import broadCastChanges from '../broadcastChanges';

export default storeInterface => (key, calledWith = 'default') => {
    const method = storeInterface.originalStore[key];
    const getOrInitPendingActions  = () => method.pendingActions = method.pendingActions || [];
    const addOneMorePendingAction = () => method.pendingActions.push(calledWith);

    getOrInitPendingActions();
    addOneMorePendingAction();
    broadCastChanges(storeInterface);
};