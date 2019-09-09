import isItAPromise from '../utils/isItAPromise';
import stringifyParams from '../utils/stringifyParams';
import broadCastChanges from './broadcastChanges';

export default ((bait,context,key)=>{
    return (...props)=>{
        console.log('salkdmlasmdalsm');
        const exec = bait.bind(context)(...props);
        
        if (isItAPromise(exec)){
            let calledWith = stringifyParams([...props]);
            context.schedulePendingAction(key, calledWith);
            return exec.then((r)=>{
                context.deschedulePendingAction(key, calledWith);
                return r;
            });
        }
        broadCastChanges(context);
        return exec;
    };
});