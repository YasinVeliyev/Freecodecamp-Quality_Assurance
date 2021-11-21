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
  this.input = input;
  this.getNum = function (custominput) {
    if (custominput.match(/^[A-Za-z]+$/)) {
      custominput = 1 + custominput;
    }
    let initInput = custominput.match(/^\d+(\.\d+)?(\.|\/)?\d*/);
    if (
      !initInput ||
      (custominput.match(/\//g) && custominput.match(/\//g).length >= 2)
    ) {
      this.errorMessages = "invalid number";
      return new Error(this.errorMessages);
    }

    this.initNum = +eval(initInput[0]);
    return this.initNum;
  };

  this.getUnit = function (input) {
    let initUnit = input.match(/[a-zA-Z]+$/)[0];
    if (!this.initUnits.has(initUnit)) {
      if (this.errorMessages) {
        this.errorMessages += " and unit";
      } else {
        this.errorMessages = "invalid unit";
      }
      return new Error(this.errorMessages);
    }
    this.initUnit = initUnit;
    return this.initUnit;
  };

  this.getReturnUnit = function (initUnit) {
    if (!this.initUnits.has(initUnit)) {
      if (this.errorMessages=="invalid number") {
        this.errorMessages += " and unit";
      } else {
        this.errorMessages = "invalid unit";
      }
      return new Error(this.errorMessages);
    }
    return this.initUnits.get(initUnit);
  };

  this.spellOutUnit = function (unit) {
    if (!this.initUnits.has(unit)) {
      if (this.errorMessages=="invalid number") {
        this.errorMessages += " and unit";
      } else {
        this.errorMessages = "invalid unit";
      }
      return new Error(this.errorMessages);
    }
    this.initUnitString= this.spellOutUnits.get(unit)
    this.returnUnitString=this.spellOutUnits.get(this.initUnits.get(unit))
    return  this.initUnitString;
  };

  this.convert = function (initNum, initUnit) {
    let converter = {
      gal: 3.78541,
      L: (1 / 3.78541).toFixed(6),
      lbs: 0.453592,
      kg: (1 / 0.453592).toFixed(6),
      mi: 1.60934,
      km: (1 / 1.60934).toFixed(6),
    };

    return initNum * converter[initUnit];
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

  this.init = function () {
    this.getNum(this.input);
    this.getUnit(this.input);
    this.convert(this.input);
    this.getReturnUnit(this.input);
    this.spellOutUnit(this.input);
    this.getString(this.input);
    return this;
  };
}

module.exports = ConvertHandler;
