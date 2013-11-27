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