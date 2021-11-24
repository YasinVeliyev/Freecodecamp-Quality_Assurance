const chai = require("chai");
const { test } = require("mocha");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
    test("Should correctly read a whole number input.", function (done) {
        assert.equal(convertHandler.getNum("3.56mi"), 3.56);
        done();
    });
    test("Should correctly read a decimal number input.", function (done) {
        assert.equal(convertHandler.getNum("3.56km"), 3.56);
        done();
    });
    test("Should correctly read a fractional input.", function (done) {
        assert.equal(convertHandler.getNum("5/5sa"), 1);
        done();
    });
    test("Should correctly read a fractional input with a decimal.", function (done) {
        assert.equal(convertHandler.getNum("5.5/5sa"), 1.1);
        done();
    });
    test("Should correctly return an error on a double-fraction (i.e. 3/2/3).", function (done) {
        assert.instanceOf(convertHandler.getNum("5//2"), Error);
        done();
    });
    test("Should correctly default to a numerical input of 1 when no numerical input is provided.", function (done) {
        assert.equal(convertHandler.getNum("sa"), 1);
        done();
    });
    test("Should correctly read each valid input unit.", function (done) {
        assert.equal(convertHandler.getUnit("l"), "L");
        done();
    });
    test("Should correctly return an error for an invalid input unit.", function (done) {
        assert.instanceOf(convertHandler.getUnit("5//2sa"), Error);
        done();
    });
    test("Should return the correct return unit for each valid input unit.", function (done) {
        assert.equal(convertHandler.getReturnUnit("km"), "mi");
        done();
    });
    test("Should correctly return the spelled-out string unit for each valid input unit.", function (done) {
        assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
        done();
    });
    test("Should correctly convert gal to L.", function (done) {
        assert.equal(convertHandler.convert(1, "gal"), 3.78541);
        done();
    });
    test("Should correctly convert L to gal.", function (done) {
        assert.equal(convertHandler.convert(1, "L"), (1 / 3.78541).toFixed(5));
        done();
    });
    test("Should correctly convert mi to km.", function (done) {
        assert.equal(convertHandler.convert(1, "mi"), 1.60934);
        done();
    });
    test("Should correctly convert km to mi.", function (done) {
        assert.equal(convertHandler.convert(1, "km"), (1 / 1.60934).toFixed(5));
        done();
    });
    test("Should correctly convert lbs to kg.", function (done) {
        assert.equal(convertHandler.convert(1, "lbs"), 0.45359);
        done();
    });
    test("Should correctly convert kg to lbs.", function (done) {
        assert.equal(convertHandler.convert(1, "kg"), (1 / 0.453592).toFixed(5));
        done();
    });
});
