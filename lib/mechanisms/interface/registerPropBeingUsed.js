import broadCastChanges from '../broadcastChanges';

export default storeInterface => (key,id) => {

    const broadCast = () => broadCastChanges(storeInterface);
    const hasOriginalStore = () => false && storeInterface[key].originalStore;
    const attachBroadcast = () => storeInterface[key].attach(broadCast() ,id);
    
    return hasOriginalStore() && attachBroadcast(); 
};