function Sheep(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
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