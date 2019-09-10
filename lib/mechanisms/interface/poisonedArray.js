export default (array, fn) => {

    const methods = ['push', 'unshift', 'reverse', 'concat', 'fill', 'pop', 'sort', 'splice', 'shift', 'copyWithin'];

    const poisonedArray = [...array];

    methods.map((key)=>{
            const hold = poisonedArray[key];
            Object.defineProperty(poisonedArray,key,{
                get(){
                    return (...props) => {
                        const exec = hold.apply(array, props);
                        fn();
                        return exec;
                    };
                },
                enumerable:false
            })
    });
    return poisonedArray;
};