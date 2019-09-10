import poisonedArray from './poisonedArray';

describe('createStore', function() {
  
    it('Testing simple getter', function() {
        const spy = jasmine.createSpy();
        const array = poisonedArray([1,2,3],spy);
        array.push(1);
        expect( spy ).toHaveBeenCalledTimes(1);
    });

    it('testing setter', function() {
        // const store = {a:'a',b:'b'};
        // const store2 = {};
        // const wasCalled = jasmine.createSpy()
        // defineProperty(store, store2, 'a', wasCalled);
        // store2.a = 'c';
        // expect( wasCalled ).toHaveBeenCalled();
    });

    it('testing setter same value', function() {
        // const store = {a:'a',b:'b'};
        // const store2 = {};
        // const wasCalled = jasmine.createSpy()
        // defineProperty(store, store2, 'a', wasCalled);
        // store2.a = 'b';
        // expect( wasCalled ).toHaveBeenCalled();
    });

    it('testing array getter returning poisoned array', function() {
        // const store = {a:[]};
        // const store2 = {};
        // const wasCalled = (jasmine.createSpy())
        // defineProperty(store, store2, 'a', wasCalled);
        // expect( store2.a.push).not.toBe(Array.prototype.push);
        // expect( store.a.push ).toBe(Array.prototype.push);
    });

    
});
      