'use strict';

let SandwichMaker = require('./sandwichMaker');

let breadPrices = {
  "wheat": 1.20,
  "white": 1.40,
  "wonder": 4.00,
  "artisan": 12.00
};

let addBread = function(choice) {
  SandwichMaker.addTopping(breadPrices[choice])
  return breadPrices[choice];
};

module.exports = addBread;