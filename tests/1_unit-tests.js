const chai = require("chai");
const { test } = require("mocha");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler("3.56sa");
convertHandler.init();

suite("Unit Tests", function () {
    test("Should correctly read a whole number input.", function () {
        assert.equal(3.56, convertHandler.initNum);
    });
    test("Should correctly read a decimal number input.", function () {
        assert.equal(3.56, convertHandler.initNum);
    });
    test("Should correctly read a fractional input.", function () {
        assert.equal(1, convertHandler.getNum("5/5sa"));
    });
    test("Should correctly read a fractional input with a decimal.", function () {
        assert.equal(1.1, convertHandler.getNum("5.5/5sa"));
    });
    test("Should correctly return an error on a double-fraction (i.e. 3/2/3).", function () {
        assert.instanceOf(convertHandler.getNum("5/5/5sa"),Error);
    });
    test("Should correctly default to a numerical input of 1 when no numerical input is provided.", function () {
        assert.equal(1,convertHandler.getNum("sa"));
    });
});
