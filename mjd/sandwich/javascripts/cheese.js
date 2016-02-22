'use strict';

let SandwichMaker = require('./sandwichMaker');

let cheesePrices = {
  "american": 0.40,
  "swiss": 0.50,
  "provolone": 0.60,
  "cheddar": 70.00
};

let addCheese = function(choice) {
  SandwichMaker.addTopping(cheesePrices[choice])
  return cheesePrices[choice];
};

module.exports = addCheese;