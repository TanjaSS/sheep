function Sheep(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.view = null;
    this.size = 50;
}

Sheep.prototype.saySomething = function() {
    return "beee";
};

Sheep.prototype.getX = function() {
    return this.x;
};

Sheep.prototype.getY = function() {
    return this.y;
};

Sheep.prototype.getDirection = function() {
    return this.direction;
};

Sheep.prototype.turnLeft = function() {
    if (this.direction === "right") {
        this.direction = "up";
    } else if (this.direction === "up") {
        this.direction = "left";
    } else if (this.direction === "left") {
        this.direction = "down";
    } else {
        this.direction = "right";
    }
};

Sheep.prototype.turnRight = function() {
    if (this.direction === "right") {
        this.direction = "down";
    } else if (this.direction === "up") {
        this.direction = "right";
    } else if (this.direction === "left") {
        this.direction = "up";
    } else {
        this.direction = "left";
    }
};

Sheep.prototype.move = function() {
    if (this.direction === "up") {
        this.y = this.y - 1;
    } else if (this.direction === "right") {
        this.x = this.x + 1;
    } else if (this.direction === "down") {
        this.y = this.y + 1;
    } else {
        this.x = this.x - 1;
    }
    
    this.draw();
};

Sheep.prototype.moveRandomly = function() {
    if (Math.random() < 0.7) {
        this.move();
    } else {
        this.turnRandomly();
    }
};

Sheep.prototype.turnRandomly = function() {
    if (Math.random() < 0.5) {
        this.turnLeft();
    } else {
        this.turnRight();
    }
};

Sheep.prototype.draw = function() {
    if (this.view === null) {
        this.view = document.createElement("div");
        this.view.setAttribute("class", "sheep");
        document.getElementById("meadow").appendChild(this.view);
    }
    
    var top = this.y * this.size + "px";
    var left = this.x * this.size + "px";
    this.view.setAttribute("style", "left:" + left + ";top:" + top);
};