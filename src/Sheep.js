function Sheep(x, y) {
    this.x = x;
    this.y = y;
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