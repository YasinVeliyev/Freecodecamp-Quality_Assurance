const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
    test("Convert 10L (valid input)", function (done) {
        chai.request(server)
            .get("/api/convert?input=10L")
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 10);
                assert.equal(res.body.initUnit, "L");
                assert.equal(res.body.returnNum, 2.64172);
                assert.equal(res.body.returnUnit, "gal");
                done();
            });
    });
    test("Convert an invalid input such as 32g", function (done) {
        chai.request(server)
            .get("/api/convert?input=32g")
            .end(function (err, res) {
                console.log(res.json);
                assert.equal(res.status, 200);
                assert.equal(res.text, "invalid unit");
                done();
            });
    });
});
