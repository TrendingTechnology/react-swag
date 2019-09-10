import attach from './attach';

describe("$interface::attach", function() {
    
  
    it("check if its creating listeners", function() {
        const fakeInterface = {originalStore : {}}
        attach(fakeInterface)(()=>{},'id');

        expect(typeof fakeInterface.originalStore).toBe('object');
    });

    it("check if its attaching update function", function() {
        const fakeInterface = {originalStore : {}}
        const fn = ()=>{};
        attach(fakeInterface)(fn,'id');

        expect(fakeInterface.originalStore.listeners['id']).toBe(fn);
    });

    it("check if its cleaning-up", function() {
        const fakeInterface = {originalStore : {}}
        const fn = ()=>{};
        const clean = attach(fakeInterface)(fn,'id');
        expect(fakeInterface.originalStore.listeners['id']).toBe(fn);
        clean();
        expect(fakeInterface.originalStore.listeners['id']).toBe(undefined);
        expect(fakeInterface.originalStore.listeners).toEqual({});
    });

    
  });
      