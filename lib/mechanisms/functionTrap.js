import isItAPromise from '../utils/isItAPromise';
import stringifyParams from '../utils/stringifyParams';
import broadCastChanges from './broadcastChanges';

export default ((bait,context,key)=>{
    return (...props)=>{
        const broadcast = () => broadCastChanges(context);

        const exec = bait.bind(context.originalStore)(...props);
        
        if (isItAPromise(exec)){
            let calledWith = stringifyParams([...props]);
            context.schedulePendingAction(key, calledWith, broadcast);
            return exec.then((r)=>{
                context.deschedulePendingAction(key, calledWith, broadcast);
                return r;
            });
        }
        broadcast();
        return exec;
    };
});