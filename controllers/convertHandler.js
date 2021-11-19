function ConvertHandler(input) {
    this.initUnits = new Map([
        ["gal", "L"],
        ["km", "mi"],
        ["lbs", "kg"],
        ["L", "gal"],
        ["kg", "lbs"],
        ["mi", "km"],
    ]);
    this.input = input;
    this.getNum = function () {
        if (custominput) {
            this.input = input;
        }
        let initInput = this.input.match(/^\d+(\.|\/)?\d*/);
        console.log(initInput);
        if (!initInput) {
            this.errorMessages = "invalid number";
            return;
        }
        this.initNum = +initInput[0];
        return this.initNum;
    };

    this.getUnit = function (input) {
        let result;

        return result;
    };

    this.getReturnUnit = function (initUnit) {
        let result;

        return result;
    };

    this.spellOutUnit = function (unit) {
        let result;

        return result;
    };

    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;

        return result;
    };

    this.getNum();
}

module.exports = ConvertHandler;
