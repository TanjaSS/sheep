describe("Meadow", function() {
    var meadow;
    var width;
    var height;

    beforeEach(function() {
        width = 300;
        height = 400;
        meadow = new Meadow(width, height);
    });

    describe("getWidth", function() {
        it("returns width", function() {
            expect(meadow.getWidth()).toEqual(width);
        });
    });

    describe("getHeight", function() {
        it("returns height", function() {
            expect(meadow.getHeight()).toEqual(height);
        });
    });
    
    describe("canMove", function() {
        var sheep;
        
        beforeEach(function() {
            meadow = new Meadow(400, 400);
        });
        
        describe("when sheep wants to move right", function() {
            describe("when sheep has enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(100, 100, "right");
                });
                
                it("returns true", function() {
                    expect(meadow.canMove(sheep)).toBeTruthy();
                });
            });
            
            describe("when sheep doesn't have enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(400, 100, "right");
                });
                
                it("returns false", function() {
                    expect(meadow.canMove(sheep)).toBeFalsy();
                });
            });
        });
        
        describe("when sheep wants to move left", function() {
            describe("when sheep has enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(100, 100, "left");
                });
                
                it("returns true", function() {
                    expect(meadow.canMove(sheep)).toBeTruthy();
                });
            });
            
            describe("when sheep doesn't have enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(0, 100, "left");
                });
                
                it("returns false", function() {
                    expect(meadow.canMove(sheep)).toBeFalsy();
                });
            });
        });
        
        describe("when sheep wants to move up", function() {
            describe("when sheep has enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(100, 100, "up");
                });
                
                it("returns true", function() {
                    expect(meadow.canMove(sheep)).toBeTruthy();
                });
            });
            
            describe("when sheep doesn't have enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(100, 0, "up");
                });
                
                it("returns false", function() {
                    expect(meadow.canMove(sheep)).toBeFalsy();
                });
            });
        });
        
        describe("when sheep wants to move down", function() {
            describe("when sheep has enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(100, 100, "down");
                });
                
                it("returns true", function() {
                    expect(meadow.canMove(sheep)).toBeTruthy();
                });
            });
            
            describe("when sheep doesn't have enough room to move", function() {
                beforeEach(function() {
                    sheep = new Sheep(100, 350, "down");
                });
                
                it("returns false", function() {
                    expect(meadow.canMove(sheep)).toBeFalsy();
                });
            });
        });
    });
});
