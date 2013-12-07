describe("Sheep", function() {
    var sheep;
    var meadow;
    
    beforeEach(function() {
        meadow = new Meadow(400, 400);
        sheep = new Sheep(5, 10, "left", meadow);
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
                sheep2 = new Sheep(10, 10, "right", meadow);
            });
            
            it("returns right", function() {
                expect(sheep2.getDirection()).toEqual("right");
            });
        });
    });
    
    describe("#turnLeft", function() {
        describe("when sheep is directed right", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "right", meadow);
            });
            
            it("turns the sheep up", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("up");
            });
        });
        
        describe("when sheep is directed up", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "up", meadow);
            });
            
            it("turns the sheep left", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("left");
            });
        });
        
                
        describe("when sheep is directed left", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "left", meadow);
            });
            
            it("turns the sheep down", function() {
                sheep.turnLeft();
                expect(sheep.getDirection()).toEqual("down");
            });
        });
        
                
        describe("when sheep is directed down", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "down", meadow);
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
                sheep = new Sheep(5, 5, "right", meadow);
            });
            
            it("turns the sheep down", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("down");
            });
        });
        
        describe("when sheep is directed up", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "up", meadow);
            });
            
            it("turns the sheep right", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("right");
            });
        });
        
                
        describe("when sheep is directed left", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "left", meadow);
            });
            
            it("turns the sheep up", function() {
                sheep.turnRight();
                expect(sheep.getDirection()).toEqual("up");
            });
        });
        
                
        describe("when sheep is directed down", function() {
            beforeEach(function() {
                sheep = new Sheep(5, 5, "down", meadow);
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
          sheep = new Sheep(100, 100, "up", meadow);
        });

        it("moves the sheep up", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(100);
          expect(sheep.getY()).toEqual(50);
        });
      });

      describe("when sheep is directed right", function() {
        beforeEach(function() {
          sheep = new Sheep(100, 100, "right", meadow);
        });

        it("moves the sheep right", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(150);
          expect(sheep.getY()).toEqual(100);
        });
      });

      describe("when sheep is directed down", function() {
        beforeEach(function() {
          sheep = new Sheep(100, 100, "down", meadow);
        });

        it("moves the sheep down", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(100);
          expect(sheep.getY()).toEqual(150);
        });
      });

      describe("when sheep is directed left", function() {
        beforeEach(function() {
          sheep = new Sheep(100, 100, "left", meadow);
        });

        it("moves the sheep left", function() {
          sheep.move();
          expect(sheep.getX()).toEqual(50);
          expect(sheep.getY()).toEqual(100);
        });
      });
    });
});
