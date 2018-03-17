var someObject = {}; 
console.log(someObject.toString());

function Shape (x,y) {
    this.x = x;
    this.y = y;
}

Shape.prototype = {
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    }
}

//Shape.message = function () {
 //   console.log("Hello from message");
//};

Shape.prototype.message = function () {
    console.log("Hello from message");
};

Shape.prototype.getX = function () {
    return this.x;
};

Shape.prototype.getY = function () {
    return this.y;
};

Shape.prototype.move = function (deltaX,deltaY) {
    this.x += deltaX;
    this.y += deltaY;
};

var aShape = new Shape(2,1);

console.log(aShape.x);
aShape.message();
//Shape.message();
aShape.getX();
aShape.move(3,3);
console.log(aShape.getX());
console.log(aShape.getY());

function Circle (x,y,r) {
    Shape.call(this, x,y)
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
    return Math.PI * this.r * this.r;
};

var aCircle = new Circle(20,30,2);

console.log(aCircle.area());
