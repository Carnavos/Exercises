'use strict';

let SandwichMaker = require("./sandwichMaker");

let meatPrices = {
  "ham": 1.30,
  "turkey": 1.40,
  "roastBeef": 1.60,
  "meatball": 1.90  
}

let addMeat = function(choice) {
  SandwichMaker.addTopping(meatPrices[choice]);
  return meatPrices[choice];
};

module.exports = addMeat;