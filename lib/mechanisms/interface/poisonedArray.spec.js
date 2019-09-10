import poisonedArray from './poisonedArray';

describe('$interface::poisonedArray', function() {
  
    it('Testing simple getter', function() {
        const spy = jasmine.createSpy();
        const array = poisonedArray([1,2,3],spy);
        array.push(1);
        expect( spy ).toHaveBeenCalledTimes(1);
    });

});
      