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
    
    describe("#turnLeft", function() {
        describe("when sheep is directed right", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "right");
            });
            
            it("turns the sheep up", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("up");
            });
        });
        
        describe("when sheep is directed up", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "up");
            });
            
            it("turns the sheep left", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("left");
            });
        });
        
                
        describe("when sheep is directed left", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "left");
            });
            
            it("turns the sheep down", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("down");
            });
        });
        
                
        describe("when sheep is directed down", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "down");
            });
            
            it("turns the sheep right", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("right");
            });
        });
    });
    
    describe("#turnRight", function() {
        describe("when sheep is directed right", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "right");
            });
            
            it("turns the sheep down", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("down");
            });
        });
        
        describe("when sheep is directed up", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "up");
            });
            
            it("turns the sheep right", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("right");
            });
        });
        
                
        describe("when sheep is directed left", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "left");
            });
            
            it("turns the sheep up", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("up");
            });
        });
        
                
        describe("when sheep is directed down", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "down");
            });
            
            it("turns the sheep left", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("left");
            });
        });
    });

    describe("#move", function() {
      describe("when sheep is directed up", function() {
        beforeEach(function() {
          sheep = new Sheep(5, 5, "up");
        });

        it("moves the sheep up", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(5);
          expect(sheep.getY()).toEqual(4);
        });
      });

      describe("when sheep is directed right", function() {
        beforeEach(function() {
          sheep = new Sheep(5, 5, "right");
        });

        it("moves the sheep right", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(6);
          expect(sheep.getY()).toEqual(5);
        });
      });

      describe("when sheep is directed down", function() {
        beforeEach(function() {
          sheep = new Sheep(5, 5, "down");
        });

        it("moves the sheep down", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(5);
          expect(sheep.getY()).toEqual(6);
        });
      });

      describe("when sheep is directed left", function() {
        beforeEach(function() {
          sheep = new Sheep(5, 5, "left");
        });

        it("moves the sheep left", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(4);
          expect(sheep.getY()).toEqual(5);
        });
      });
    });
});
