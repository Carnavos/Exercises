var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    },
    resetTotalPrice: function() {
      totalPrice = 0;
    },
    getTotalPrice: function() {
      return totalPrice;
    }
  };
})();

// Bread Augment
var SandwichMaker = (function(maker) {
  var breadPrices = {
    "wheat": 1.20,
    "white": 1.40,
    "wonder": 4.00,
    "artisan": 12.00
  };

  maker.addBread = function(choice) {
    // console.log("addBread init");
    // console.log("breadPrices[choice]: ", breadPrices[choice]);
    SandwichMaker.addTopping(breadPrices[choice])
    return breadPrices[choice];
  };
  return maker;
})(SandwichMaker);

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


// Cheese Augment
var SandwichMaker = (function(maker) {
  var cheesePrices = {
    "american": 0.40,
    "swiss": 0.50,
    "provolone": 0.60,
    "cheddar": 70.00
  };

  maker.addCheese = function(choice) {
    SandwichMaker.addTopping(cheesePrices[choice])
    return cheesePrices[choice];
  };
  return maker;
})(SandwichMaker);

// Veggies Augment
var SandwichMaker = (function(maker) {
  var veggiesPrices = {
    "lettuce": 0.20,
    "peppers": 0.50,
    "olives": 0.70,
    "spinach": 0.60
  };

  maker.addVeggies = function(choice) {
    SandwichMaker.addTopping(veggiesPrices[choice])
    return veggiesPrices[choice];
  };
  return maker;
})(SandwichMaker);

// Condiments Augment
var SandwichMaker = (function(maker) {
  var condimentsPrices = {
    "catsup": 1.90,
    "mustard": 1.40,
    "mayo": 1.00,
    "fluff": 3.00
  };

  maker.addCondiments = function(choice) {
    SandwichMaker.addTopping(condimentsPrices[choice])
    return condimentsPrices[choice];
  };
  return maker;
})(SandwichMaker);

// console.log("SandwichMaker: ",SandwichMaker);


// Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. 
// Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

// bread
// meat
// cheese
// condiments
// veggies

// Your project should have one HTML file that has:

// a section of options for each sandwich part
// the ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
// an empty DOM element into which the final sandwich order and its cost will be inserted
// The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. 
// {"turkey": 0.90, "bacon": 1.50}

// Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

// Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. 
// That argument's value should be the ingredient array selected by the user.

// You should also create an additional JavaScript file that handles interacting with the form elements 
// and determining which method should be called.

// Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.