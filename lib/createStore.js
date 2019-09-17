import prepareSubStores from './mechanisms/prepareSubStores';
import prepareTraps from './mechanisms/prepareTraps';
import prepareState from './mechanisms/prepareState';
import attach from './mechanisms/interface/attach';
import schedulePendingAction from './mechanisms/interface/schedulePendingAction';
import deschedulePendingAction from './mechanisms/interface/deschedulePendingAction';
import broadcastChanges from './mechanisms/broadcastChanges';
import trapFunction from './mechanisms/functionTrap';

const createStoreInterface = originalStore => {
    
    const $interface = {  };
    Object.defineProperty($interface,'originalStore',{
        // enumerable: false,
        get:()=> originalStore
    });

    Object.defineProperty($interface,'attach',{
        enumerable: false,
        get:()=> attach($interface)
    });

    Object.defineProperty($interface,'schedulePendingAction',{
        enumerable: false,
        get:()=> schedulePendingAction($interface)
    });

    Object.defineProperty($interface,'deschedulePendingAction',{
        enumerable: false,
        get:()=> deschedulePendingAction($interface)
    });

    prepareState($interface);
    prepareTraps($interface, () => broadcastChanges($interface), trapFunction);
    prepareSubStores($interface, createStoreInterface);


    return $interface;
};

export default createStoreInterface;