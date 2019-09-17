import ing from './ing.js';

describe('ing', function() {

    it('ing pending default', function() {
        const method = {
            originalMethod: {
                pendingActions: ['default']
            }
        };
        expect(ing()(method,'default')).toBe(true);
    });

    it('ing pending with simple param', function() {
        const method = {
            originalMethod: {
                pendingActions: [5]
            }
        };
        expect(ing()(method,5)).toBe(true);
    });

    it('ing pending with object param', function() {
        const method = {
            originalMethod: {
                pendingActions: ['{a:\'b\'}']
            }
        };
        expect(ing()(method,'{a:\'b\'}')).toBe(true);
    });

    it('ing pending with multiple params', function() {
        const params = [1,2,3];
        const method = {
            originalMethod: {
                pendingActions: [JSON.stringify(params)]
            }
        };
        expect(ing()(method,JSON.stringify(params))).toBe(true);
    });

    
});
      