import createStore from '../createStore';
import prepareTraps from './prepareTraps';

describe('$mechanisms::prepareTraps', function() {
    const fn = ()=>{};
    const store = createStore({
        a:fn,
        b:()=>{}
    });
  
    it('prepare function traps', function() {
        const refreshFunction = (jasmine.createSpy()).and.returnValue(42);
        const trapFunction = (jasmine.createSpy()).and.returnValue(()=>{});
        prepareTraps(store, refreshFunction, trapFunction);
        store.a();
        store.b();
        expect(trapFunction).toHaveBeenCalledTimes(2);
    });

    
});
      