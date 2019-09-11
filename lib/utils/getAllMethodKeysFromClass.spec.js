import getAllMethodKeysFromClass from './getAllMethodKeysFromClass';

describe('$utils::getAllMethodKeysFromClass', function() {
  
    it('get method keys from an object', function() {
        const param = {a:1,b:()=>{}};
        expect(getAllMethodKeysFromClass(param)).toEqual([]);
    });

    it('get method keys from a class', function() {
        class a{
            a(){}
            b(){}
        }
        expect(getAllMethodKeysFromClass((new a()))).toEqual(['a','b']);
    });
    
});
      