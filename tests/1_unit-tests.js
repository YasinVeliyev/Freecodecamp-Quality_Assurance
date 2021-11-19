const chai = require("chai");
const { test } = require("mocha");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler("3.56sa");
convertHandler.init();
console.log(convertHandler);

suite("Unit Tests", function () {
    test("Should correctly read a whole number input.", function () {
        assert.equal(3.56, convertHandler.initNum);
    });
});
