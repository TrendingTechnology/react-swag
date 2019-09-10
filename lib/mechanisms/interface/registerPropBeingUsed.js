export default storeInterface => (key, id ,fn) => {

    const hasOriginalStore = () => Boolean(storeInterface[key].originalStore);
    const attachBroadcast = () => storeInterface[key].attach(fn ,id);
    
    return hasOriginalStore() && attachBroadcast(); 
};