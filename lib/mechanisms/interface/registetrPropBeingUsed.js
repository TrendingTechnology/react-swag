import broadCastChanges from '../broadcastChanges';

export default storeInterface => (key,id) => {
    console.log(key, id, storeInterface);
    const broadCast = () => broadCastChanges(storeInterface);
    const hasOriginalStore = () => storeInterface[key].originalStore;
    const attachBroadcast = () => storeInterface[key].attach(broadCast() ,id);
    
    return hasOriginalStore() && attachBroadcast(); 
};