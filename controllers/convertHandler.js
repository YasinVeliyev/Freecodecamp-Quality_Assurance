function ConvertHandler(input) {
    this.initUnits = new Map([
        ["gal", "L"],
        ["km", "mi"],
        ["lbs", "kg"],
        ["L", "gal"],
        ["kg", "lbs"],
        ["mi", "km"],
    ]);
    this.spellOutUnits = new Map([
        ["gal", "gallons"],
        ["km", "kilometers"],
        ["lbs", "pounds"],
        ["L", "liters"],
        ["kg", "kilograms"],
        ["mi", "miles"],
    ]);
    this.getNum = function (custominput) {
        this.errorMesages = "";
        let regex = /^\d+(\.?\d+)?(\.|\/\d*\.?\d*)?/;

        if (custominput.match(/^[A-Za-z]+$/)) {
            custominput = 1 + custominput;
        }
        let initInput = custominput.match(regex);

        if (!initInput || (custominput.match(/\//g) && custominput.match(/\//g).length >= 2)) {
            this.errorMesages = "invalid number";
            return new Error(this.errorMesages);
        }
        if (regex.test(custominput)) {
            initInput = custominput.split(/[a-zA-Z]/);
        }
        this.initNum = +eval(initInput[0]).toFixed(5);
        return this.initNum;
    };

    this.getUnit = function (input) {
        this.getNum(input);
        input = input.toLowerCase();
        let initUnit = input.match(/[a-zA-Z]+$/i) || [];
        if (initUnit[0] === "l") {
            initUnit[0] = "L";
        }
        if (!this.initUnits.has(initUnit[0])) {
            if (this.errorMesages == "invalid number") {
                this.errorMesages += " and unit";
            } else if (!this.errorMesages) {
                this.errorMesages = "invalid unit";
            }
            return new Error(this.errorMesages);
        }

        this.initUnit = initUnit[0];
        return this.initUnit;
    };

    this.getReturnUnit = function (initUnit) {
        if (initUnit === "l") {
            initUnit = "L";
        }
        if (!this.initUnits.has(initUnit)) {
            if (this.errorMesages == "invalid number") {
                this.errorMesages += " and unit";
            } else if (!this.errorMesages) {
                this.errorMesages = "invalid unit";
            }
            return new Error(this.errorMesages);
        }
        this.returnUnit = this.initUnits.get(initUnit);
        return this.returnUnit;
    };

    this.spellOutUnit = function (unit) {
        if (unit === "l") {
            unit = "L";
        }
        if (!this.initUnits.has(unit)) {
            if (this.errorMesages == "invalid number") {
                this.errorMesages += " and unit";
            } else if (!this.errorMesages) {
                this.errorMesages = "invalid unit";
            }
            return new Error(this.errorMesages);
        }
        this.initUnitString = this.spellOutUnits.get(unit);
        this.returnUnitString = this.spellOutUnits.get(this.initUnits.get(unit));
        return this.initUnitString;
    };

    this.convert = function (initNum, initUnit) {
        if (initUnit == "l") {
            initUnit = "L";
        }
        let converter = {
            gal: 3.78541,
            L: 1 / 3.78541,
            lbs: 0.453592,
            kg: 1 / 0.453592,
            mi: 1.60934,
            km: 1 / 1.60934,
        };
        this.returnNum = +(initNum * converter[initUnit]).toFixed(5);
        return this.returnNum;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result = `${parseFloat(initNum)} ${initUnit} converts to ${parseFloat(returnNum)} ${returnUnit}`;
        return result;
    };

    this.init = function (input) {
        this.input = input.toLowerCase();
        this.errorMesages = undefined;
        this.initNum = undefined;
        this.initUnit = undefined;
        this.returnNum = undefined;
        this.returnUnit = undefined;
        this.string = undefined;
        this.getNum(this.input);
        this.getUnit(this.input);
        this.getReturnUnit(this.initUnit);
        this.spellOutUnit(this.initUnit);
        this.convert(this.initNum, this.initUnit);
        this.string = this.getString(this.initNum, this.initUnitString, this.returnNum, this.returnUnitString);
        if (this.errorMesages) {
            throw new Error(this.errorMesages);
        }
        return this;
    };
}

module.exports = ConvertHandler;
