import getKeys from './getKeys';

describe('$utils::getKeys', function() {
  
    it('get method keys from an object', function() {
        const param = {a:1,b:()=>{}};
        expect(getKeys(param)).toEqual(['a','b']);
    });

    it('get method keys from a class', function() {
        class a{
            a(){}
            b(){}
        }
        expect(getKeys((new a()))).toEqual(['a','b']);
    });
    
});
      