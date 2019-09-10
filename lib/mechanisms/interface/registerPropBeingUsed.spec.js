import registerPropBeingUsed from './registerPropBeingUsed';

describe('$interface::registerPropBeingUsed', function() {
    it('Assert SubStore without beingcreated', function() {
        const store = {
            a : {
                a : 2
            }
        };
        expect(registerPropBeingUsed(store)('a','id',()=>{})).toBe(false);
    });

    it('Assert SubStore created', function() {
        const spy = jasmine.createSpy();
        const store = {
            a : {
                a : 2,
                attach : spy,
                originalStore : {
                    a : 2
                }
            }
        };
        registerPropBeingUsed(store)('a','id',spy);
        expect(spy).toHaveBeenCalledWith(spy,'id');
    });

});