import { useEffect } from 'react';

export default (fn =>useEffect(()=>{
    fn();
},[]));