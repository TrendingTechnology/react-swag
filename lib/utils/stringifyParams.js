export default (props => {
    if ( !props || props.length === 0 || props =='default' ) return  'default';

    try{
        if (typeof props === 'object')
            return JSON.stringify(props);
        return props;
    }catch(err){
        return 'default';
    }
});