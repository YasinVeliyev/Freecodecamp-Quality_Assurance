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
        this.errorMesages = "invalid number";
        return this.errorMesages;
      }
  
      this.initNum = +eval(initInput[0]);
      return this.initNum;
    };
  
    this.getUnit = function (input) {
      let initUnit = input.match(/[a-zA-Z]+$/i)[0];
      if (!this.initUnits.has(initUnit)) {
        if (this.errorMesages) {
          this.errorMesages += " and unit";
        } else {
          this.errorMesages = "invalid unit";
        }
        return this.errorMesages;
      }
      if(initUnit==='l'){
          initUnit='L'
      }
      this.initUnit = initUnit;
      return this.initUnit;
    };
  
    this.getReturnUnit = function (initUnit) {
      if (!this.initUnits.has(initUnit)) {
        if (this.errorMesages=="invalid number") {
          this.errorMesages += " and unit";
        } else {
          this.errorMesages = "invalid unit";
        }
        return this.errorMesages;
      }
      this.returnUnit=this.initUnits.get(initUnit);
      return this.returnUnit
    };
  
    this.spellOutUnit = function (unit) {
      if (!this.initUnits.has(unit)) {
        if (this.errorMesages=="invalid number") {
          this.errorMesages += " and unit";
        } else {
          this.errorMesages = "invalid unit";
        }
        return this.errorMesages;
      }
      this.initUnitString= this.spellOutUnits.get(unit)
      this.returnUnitString=this.spellOutUnits.get(this.initUnits.get(unit))
      return  this.initUnitString;
    };
  
    this.convert = function (initNum, initUnit) {
      let converter = {
        gal: 3.78541,
        L: (1 / 3.78541),
        lbs: 0.453592,
        kg: (1 / 0.453592),
        mi: 1.60934,
        km: (1 / 1.60934),
      };
      this.returnNum = initNum * converter[initUnit];
      return  this.returnNum
    };
  
    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
      let result = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
  
      return result;
    };
  
    this.init = function (input) {
      this.input=input.toLowerCase()
      this.getNum(this.input);
      this.getUnit(this.input);
      this.getReturnUnit(this.initUnit);
      this.spellOutUnit(this.initUnit);
      this.convert(this.initNum,this.initUnit);
      this.string=this.getString(this.initNum, this.initUnitString, this.returnNum,  this.returnUnitString);
      return this;
    };
  }
  
  module.exports = ConvertHandler;
  