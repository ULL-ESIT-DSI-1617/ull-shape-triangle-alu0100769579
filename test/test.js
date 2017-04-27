"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');
let Triangle = require('../triangle.js');

require("should");

describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.equal(2500);
  })
  it("must compute the triangle area correctly. Triangle object", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.equal(2500);
  })
});

