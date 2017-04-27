"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');

/**
 *Paquete npm de Triangle
 * 
 * Autor: Raúl Martín Morales
 * 
 * Aquí creamos la clase Triangle que hereda de Shape
 * 
 * @class Triangle
 * @param {hash} options Ancho y Alto
 * 
 */
 
class Triangle extends Shape {
  
    /**
    * @construct Triangle
    * @param{hash} options Ancho y Alto
    */
    
    constructor(options) {
      super(options)
    }
    
    /**
    * @function getArea
    * @return {value} retorna el valor del area del triangle
    */
    
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
