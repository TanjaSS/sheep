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
};