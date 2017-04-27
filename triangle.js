"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
