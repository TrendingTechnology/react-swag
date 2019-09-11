import stringifyParams from './stringifyParams';

describe('$utils::stringifyParams', function() {
  
    it('try to Stringify something not stringifyable', function() {
        const param = {};
        param.a = param;
        expect(stringifyParams(param)).toBe('default');
    });

    it('try to Stringify something not stringifyable', function() {
        const param = {a : 2, b : '2'};
        expect(stringifyParams(param)).toEqual(JSON.stringify(param));
    });
    
});
      