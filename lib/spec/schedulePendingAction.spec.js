import schedulePendingAction from '../mechanisms/interface/schedulePendingAction';

describe('$interface::schedulePendingAction', function() {
  
    it('Testing create pendingActions array', function() {
        const storeInterface = { 
            originalStore: {
                fn:()=>{}
            }
        };
        const called = jasmine.createSpy();
        schedulePendingAction(storeInterface)('fn','default',called);
        expect(storeInterface.originalStore.fn.pendingActions).not.toBe(undefined);
    });

    it('Testing add pending action', function() {
        const storeInterface = { 
            originalStore: {
                fn:()=>{}
            }
        };
        const called = jasmine.createSpy();
        schedulePendingAction(storeInterface)('fn','default',called);
        expect(storeInterface.originalStore.fn.pendingActions).toEqual(['default']);
    });

    it('Testing calling function after add', function() {
        const storeInterface = { 
            originalStore: {
                fn:()=>{}
            }
        };
        const called = jasmine.createSpy();
        schedulePendingAction(storeInterface)('fn','default',called);
        expect(called).toHaveBeenCalledTimes(1);
    });

});
      