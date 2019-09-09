import stringifyParams from '../utils/stringifyParams';

export default () => (fn,props='default') => {
    if (!fn || !fn.originalMethod || !fn.originalMethod.pendingActions) return false;

    const pendingActions = fn.originalMethod.pendingActions;

    if (props === 'default' && pendingActions[0]) return true;

    const calledwith = stringifyParams(props);
    
    if ( pendingActions.includes(calledwith) ) return true;

    return false;
};