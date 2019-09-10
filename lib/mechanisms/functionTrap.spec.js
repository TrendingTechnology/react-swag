import functionTrap from './functionTrap';
import createStore from '../createStore';

describe('$mechanisms::functionTrap', function() {
    const store = createStore({
        simple(){},
        lazy(){
            return new Promise(resolve => setTimeout(resolve,100));
        },
    });
  
    it('trap simple function', function() {
        const spy = jasmine.createSpy();
        functionTrap(store.originalStore.simple, store, 'simple', spy)();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('trap lazy function', function(done) {
        const spy = jasmine.createSpy();
        const exec = functionTrap(store.originalStore.lazy, store, 'lazy', spy)();
        expect(spy).toHaveBeenCalledTimes(1);
        exec.then(()=>{
            expect(spy).toHaveBeenCalledTimes(2);
            done();
        });
        
    });

    
});
      