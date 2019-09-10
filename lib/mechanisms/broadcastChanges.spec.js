import broadcastChanges from './broadcastChanges';

describe('$mechanisms::broadcastChanges', function() {
    
  
    it('check if its creating listeners', function() {
        const spy = jasmine.createSpy();
        const store =  {
            a: 'b',
            originalStore : {
                a: 'b',
                listeners : {
                    id : spy
                }
            }
        };

        broadcastChanges(store);

        expect(spy).toHaveBeenCalledTimes(1);
    });

    
});
      