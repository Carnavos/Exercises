(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    "ham": 1.30,
    "turkey": 1.40,
    "roastBeef": 1.60,
    "meatball": 1.90
  };

  // Augment the original object with another method
  maker.addMeat = function(choice) {
    SandwichMaker.addTopping(meatPrices[choice])
    return meatPrices[choice];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

let SandwichMaker = require("./sandwichMaker");

let meatPrices = {
  "ham": 1.30,
  "turkey": 1.40,
  "roastBeef": 1.60,
  "meatball": 1.90  
}

SandwichMaker.addMeat = function(choice) {
  SandwichMaker.addTopping(meatPrices[choice])
  return meatPrices[choice];
};

module.exports = SandwichMaker;
},{"./sandwichMaker":2}],2:[function(require,module,exports){
'use strict';
// Variable declaration
let SandwichMaker = {
  totalPrice: 0,

  addTopping (toppingPrice) {
    totalPrice += toppingPrice;
  },

  resetTotalPrice () {
    totalPrice = 0;
  },

  getTotalPrice () {
    return totalPrice;
  },


  
};

module.exports = SandwichMaker;

// let SandwichMaker => {

//   // Private variable to store the price
//   let totalPrice = 0;

//   // Return the public interface that other code can interact with
//   return {
//     addTopping (toppingPrice) {
//       totalPrice += toppingPrice;
//     },
//     resetTotalPrice () {
//       totalPrice = 0;
//     },
//     getTotalPrice () {
//       return totalPrice;
//     }
//   };
// }();
},{}]},{},[2,1]);
