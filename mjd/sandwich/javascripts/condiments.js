'use strict';
let SandwichMaker = require('./sandwichMaker');

var condimentsPrices = {
  "catsup": 1.90,
  "mustard": 1.40,
  "mayo": 1.00,
  "fluff": 3.00
};

let addCondiments = function(choice) {
  SandwichMaker.addTopping(condimentsPrices[choice])
  return condimentsPrices[choice];
};

module.exports = addCondiments;