export default ((list,item) => {
    let found = false;
    const newList = list.filter( i => {
        if  (i !== item || found === true){
            return true;
        }
        found = true;
        return false;
    });
    return newList;
});