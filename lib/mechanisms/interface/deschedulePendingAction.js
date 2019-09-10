export default storeInterface => (key, calledWith = 'default', fn) => {
    const method = storeInterface.originalStore[key];
    method.pendingActions = method.pendingActions || [];
    const uncalledOnly = cw => (calledWith!==cw);
    const justUncalledPendingActions = () => method.pendingActions.filter(uncalledOnly);
    
    method.pendingActions = justUncalledPendingActions();

    const noMorePendingActions = !method.pendingActions[0];
    const deletePendingActions = () => delete method.pendingActions;
    
    noMorePendingActions && deletePendingActions();
    return fn();
};