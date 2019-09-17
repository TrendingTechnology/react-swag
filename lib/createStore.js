import prepareSubStores from './mechanisms/prepareSubStores';
import prepareTraps from './mechanisms/prepareTraps';
import attach from './mechanisms/interface/attach';
import schedulePendingAction from './mechanisms/interface/schedulePendingAction';
import deschedulePendingAction from './mechanisms/interface/deschedulePendingAction';
import broadcastChanges from './mechanisms/broadcastChanges';
import trapFunction from './mechanisms/functionTrap';

const hideProperty = ($interface,prop,value) => {
    Object.defineProperty($interface,prop,{
        get:()=> value
    });    
};

const createStoreInterface = originalStore => {
    
    const $interface = {  };
    hideProperty($interface,'originalStore',originalStore);
    hideProperty($interface,'attach',attach($interface));
    hideProperty($interface,'schedulePendingAction',schedulePendingAction($interface));
    hideProperty($interface,'deschedulePendingAction',deschedulePendingAction($interface));

    prepareTraps($interface, () => broadcastChanges($interface), trapFunction);
    prepareSubStores($interface, createStoreInterface);

    const proxy = new Proxy($interface,{
        get: function(obj, prop) {
            if ($interface[prop] !== undefined && $interface[prop].originalStore){
                return $interface[prop];                
            }

            if (typeof $interface[prop] === 'function'){
                return $interface[prop];
            }

            if ($interface.originalStore[prop] !== undefined){
                return $interface.originalStore[prop];
            }

            return $interface[prop];
            
        },
        set: function(obj, prop, value){
            if (typeof value === 'function'){
                $interface[prop] = value;
            }
            $interface.originalStore[prop] = value;
            broadcastChanges($interface);
            
            return Reflect.set(...arguments);
        }
    } );

    return proxy;
};

export default createStoreInterface;