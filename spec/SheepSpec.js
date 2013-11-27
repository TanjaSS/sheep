describe("Sheep", function() {
    var sheep;
    
    beforeEach(function() {
        sheep = new Sheep(5, 10, "left");
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
    
    describe("#getDirection", function() {
        describe("when direction is left", function() {
            it("returns left", function() {
                expect(sheep.getDirection()).toEqual("left");
            });
        });
        
        describe("when direction is right", function() {
            var sheep2;
            
            beforeEach(function() {
                sheep2 = new Sheep(10, 10, "right");
            });
            
            it("returns right", function() {
                expect(sheep2.getDirection()).toEqual("right");
            });
        });
    });
});