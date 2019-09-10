import createStore from './createStore';

describe('createStore', function() {
    const getStore = () =>createStore({
        a:'a',
        b:1,
        c:0,
        d:{a:'b'},
        e:[0,1,2],
        f:false,
        g:undefined
    });
  
    it('assert store values through getters', function() {
        const myStore = getStore();
        expect(myStore.a).toBe('a');
        expect(myStore.b).toBe(1);
        expect(myStore.c).toBe(0);
        expect(myStore.d.originalStore).toEqual({a:'b'});
        expect(myStore.e).toEqual([0,1,2]);
        expect(myStore.f).toBe(false);
        expect(myStore.g).toBe(undefined);
    });

    it('check store behavior on property setting', function() {
        const myStore = getStore();
        const wasCalled = jasmine.createSpy();
        myStore.attach(wasCalled, 'id');
        myStore.a = 'b';
        expect(wasCalled).toHaveBeenCalledTimes(1);
    });

    
});
      