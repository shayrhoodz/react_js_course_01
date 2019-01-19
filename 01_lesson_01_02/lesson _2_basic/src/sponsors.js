"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var everyCash = arguments.length > 1 ? arguments[1] : undefined;
  var total = everyCash.reduce(function (total, currentValue) {
    return total + currentValue;
  }) + own;
  return total;
}

var money = calcCash(null, cash);
exports.money = money;