import createStore from '../createStore';
import prepareSubStores from './prepareSubStores';

describe('$mechanisms::prepareSubStores', function() {
  
    it('assert prepare single substore', function() {
        const store = createStore({
            subStore:{
                a:'b'
            }
        });
        const spy = (jasmine.createSpy()).and.returnValue(42);
        prepareSubStores(store.originalStore, store, spy);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(store.subStore).toEqual(42);
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
        const spy = (jasmine.createSpy()).and.returnValue(42);
        prepareSubStores(store.originalStore, store, spy);

        expect(spy).toHaveBeenCalledTimes(2);
        expect(store.subStore).toEqual(42);

        expect(spy).toHaveBeenCalledTimes(2);
        expect(store.subStore2).toEqual(42);
    });


    it('assert prepare substores', function() {
        const store = createStore({
            a:'b'
        });
        const spy = (jasmine.createSpy()).and.returnValue(42);
        prepareSubStores(store.originalStore, store, spy);

        expect(spy).toHaveBeenCalledTimes(0);

    });

    
});
      