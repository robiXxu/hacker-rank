class Rectangle {
  constructor(w, h) {
      this.w = w;
      this.h = h;
  }
}

/*
*  Write code that adds an 'area' method to the Rectangle class' prototype
*/

Rectangle.prototype.area = function() {
  return this.h * this.w;
};

/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/
class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

const sq = new Square(4);
sq.area(); //?

const rec = new Rectangle(4,4);
rec.area(); //?

