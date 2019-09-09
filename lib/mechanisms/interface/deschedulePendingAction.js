import broadCastChanges from '../broadcastChanges';

export default storeInterface => (key, calledWith = 'default') => {
    const method = storeInterface.originalStore[key];
    const uncalledOnly = cw => (calledWith!==cw);
    const justUncalledPendingActions = () => method.pendingActions.filter(uncalledOnly);
    
    method.pendingActions = justUncalledPendingActions();

    const noMorePendingActions = !method.pendingActions[0];
    const deletePendingActions = () => delete method.pendingActions;
    
    noMorePendingActions && deletePendingActions();

    return broadCastChanges(storeInterface);
};