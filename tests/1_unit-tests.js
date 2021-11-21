const chai = require("chai");
const { test } = require("mocha");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler("3.56sa");
convertHandler.init()

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
    test("Should correctly read each valid input unit.", function () {
        assert.equal('km',convertHandler.getUnit("km"));
    });
    test("Should correctly return an error for an invalid input unit.", function () {
        assert.instanceOf(convertHandler.getUnit("ksm"),Error);
    });
    test("Should return the correct return unit for each valid input unit.", function () {
        assert.equal('mi',convertHandler.getReturnUnit("km"));
    });
    test("Should correctly return the spelled-out string unit for each valid input unit.", function () {
        assert.equal('kilometers',convertHandler.spellOutUnit("km"));
    });
    test("Should correctly convert gal to L.", function () {
        assert.equal(3.78541,convertHandler.convert(1,"gal"));
    });
    test("Should correctly convert L to gal.", function () {
        assert.equal((1 / 3.78541).toFixed(6),convertHandler.convert(1,"L"));
    });
    test("Should correctly convert mi to km.", function () {
        assert.equal(1.60934,convertHandler.convert(1,"mi"));
    });
    test("Should correctly convert km to mi.", function () {
        assert.equal((1/1.60934).toFixed(6),convertHandler.convert(1,"km"));
    });
    test("Should correctly convert lbs to kg.", function () {
        assert.equal(0.453592,convertHandler.convert(1,"lbs"));
    });
    test("Should correctly convert kg to lbs.", function () {
        assert.equal((1/0.453592).toFixed(6),convertHandler.convert(1,"kg"));
    });
});
