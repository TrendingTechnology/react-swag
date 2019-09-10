export default (array, fn) => {

    const methods = ['push', 'unshift', 'reverse', 'concat', 'fill', 'pop', 'sort', 'splice', 'shift', 'copyWithin'];

    const poisonedArray = [...array];

    methods.map((key)=>{
        if (!poisonedArray['_'+key]){
            poisonedArray['_'+key] = poisonedArray[key];
            poisonedArray[key] = (...props) => {
                const exec = poisonedArray['_'+key].apply(array, props);
                fn();
                return exec;
            };
        } 
    });
    return poisonedArray;
};