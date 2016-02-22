'use strict';

let SandwichMaker = require('./sandwichMaker');

let veggiesPrices = {
  "lettuce": 0.20,
  "peppers": 0.50,
  "olives": 0.70,
  "spinach": 0.60
};

let addVeggies = function(choice) {
  SandwichMaker.addTopping(veggiesPrices[choice])
  return veggiesPrices[choice];
};

module.exports = addVeggies;