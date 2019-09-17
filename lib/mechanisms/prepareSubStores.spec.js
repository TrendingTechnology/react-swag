import createStore from '../createStore';
import prepareSubStores from './prepareSubStores';

describe('$mechanisms::prepareSubStores', function() {
  
    it('assert prepare single substore', function() {
        const store = createStore({
            subStore:{
                a:'b'
            }
        });
        
        prepareSubStores(store, createStore);
        expect(store.subStore.a).toEqual('b');
    });

    it('assert prepare multiple substores', function() {
        const store = createStore({
            subStore:{
                a:'b'
            },
            subStore2:{
                a:'b'
            },
        });

        prepareSubStores(store, createStore);

        expect(store.subStore.a).toEqual('b');
        expect(store.subStore2.a).toEqual('b');
    });


    it('assert prepare substores', function() {
        const store = createStore({
            a:'b'
        });
        const spy = (jasmine.createSpy()).and.returnValue(42);
        prepareSubStores(store, spy);

        expect(spy).toHaveBeenCalledTimes(0);

    });

    
});
      