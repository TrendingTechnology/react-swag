import isItAPromise from '../utils/isItAPromise';
import stringifyParams from '../utils/stringifyParams';

export default ((bait,context,key,fn)=>{
    return (...props)=>{

        const exec = bait.bind(context.originalStore)(...props);
        
        if (isItAPromise(exec)){
            let calledWith = stringifyParams([...props]);
            context.schedulePendingAction(key, calledWith, fn);
            return exec.then((r)=>{
                context.deschedulePendingAction(key, calledWith, fn);
                return r;
            });
        }
        fn();
        return exec;
    };
});