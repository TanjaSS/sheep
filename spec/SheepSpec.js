describe("Sheep", function() {
    var sheep;
    
    beforeEach(function() {
        sheep = new Sheep();
    });
    
    describe("#saySomething", function() {
        it("says 'beee'", function() {
            expect(sheep.saySomething()).toEqual("beee");
        });
    });
});