"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
    let convertHandler = new ConvertHandler();
    app.get("/api/convert", (req, res, next) => {
        try {
            let { initNum, initUnit, returnNum, returnUnit, string, errorMesages } = convertHandler.init(
                req.query.input,
            );
            res.status(200).json({
                initNum,
                initUnit,
                returnNum,
                returnUnit,
                string,
            });
        } catch (err) {
            return res.status(200).send(err.message);
        }
    });
};
