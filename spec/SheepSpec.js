describe("Sheep", function() {
    var sheep;
    
    beforeEach(function() {
        sheep = new Sheep(5, 10);
    });
    
    describe("#saySomething", function() {
        it("says 'beee'", function() {
            expect(sheep.saySomething()).toEqual("beee");
        });
    });
    
    describe("#getX", function() {
        it("returns x", function() {
            expect(sheep.getX()).toEqual(5);
        });
    });
    
    describe("#getY", function() {
        it("returns y", function() {
            expect(sheep.getY()).toEqual(10);
        });
    });
});