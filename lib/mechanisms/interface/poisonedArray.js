export default (array, fn) => {

    const methods = ['push', 'unshift', 'reverse', 'concat', 'fill', 'pop', 'sort', 'splice', 'shift', 'copyWithin'];

    methods.map((key)=>{
        if (!array['_'+key]){
            array['_'+key] = array[key];
            array[key] = (...props) => {
                const exec = array['_'+key].apply(array, props);
                fn();
                return exec;
            };
        } 
    });
    return array;
};