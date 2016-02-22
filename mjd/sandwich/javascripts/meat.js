// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var meatPrices = {
//     "ham": 1.30,
//     "turkey": 1.40,
//     "roastBeef": 1.60,
//     "meatball": 1.90
//   };

//   // Augment the original object with another method
//   maker.addMeat = function(choice) {
//     SandwichMaker.addTopping(meatPrices[choice])
//     return meatPrices[choice];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);

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