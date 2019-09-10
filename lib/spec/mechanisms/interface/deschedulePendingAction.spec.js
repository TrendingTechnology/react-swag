import deschedulePendingAction from '../../../mechanisms/interface/deschedulePendingAction';

describe('$interface::deschedulePendingAction', function() {
  
    it('Testing letUncalled Untouch', function() {
        const method = () => {};
        method.pendingActions = ['default','bolo'];
        const storeInterface = { 
            originalStore: { fn:method }
        };

        const called = jasmine.createSpy();

        deschedulePendingAction(storeInterface)('fn', 'default' ,called);
        expect(method.pendingActions).toEqual(['bolo']);
    });

    it('Testing drop pendingActions key', function() {
        const method = () => {};
        method.pendingActions = ['default','bolo'];
        const storeInterface = { 
            originalStore: { fn:method }
        };

        const called = jasmine.createSpy();
        deschedulePendingAction(storeInterface)('fn', 'default' ,called);
        deschedulePendingAction(storeInterface)('fn', 'bolo' ,called);
        expect(method.pendingActions).toEqual(undefined);
    });
});
      