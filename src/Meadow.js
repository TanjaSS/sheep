function Meadow(w, h) {
    this.width = w;
    this.height = h;
    
    var meadow = document.getElementById("meadow");
    meadow.setAttribute("style", "width:" + this.width + "px;height:" + this.height + "px;");
}

Meadow.prototype.getWidth = function() {
    return this.width;
};

Meadow.prototype.getHeight = function() {
    return this.height;
};

Meadow.prototype.canMove = function(sheep) {
    if (sheep.direction === "right") {
        return (sheep.x + sheep.size) < this.width;
    } else if (sheep.direction === "left") {
        return sheep.x > 0;
    } else if (sheep.direction === "up") {
        return sheep.y > 0;
    } else {
        return (sheep.y + sheep.size) < this.height;
    }
};