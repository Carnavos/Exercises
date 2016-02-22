(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let SandwichMaker = require('./sandwichMaker');

let breadPrices = {
  "wheat": 1.20,
  "white": 1.40,
  "wonder": 4.00,
  "artisan": 12.00
};

let addBread = function(choice) {
  // console.log("addBread init");
  // console.log("breadPrices[choice]: ", breadPrices[choice]);
  SandwichMaker.addTopping(breadPrices[choice])
  return breadPrices[choice];
};

module.exports = addBread;
},{"./sandwichMaker":5}],2:[function(require,module,exports){
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
},{"./sandwichMaker":5}],3:[function(require,module,exports){
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
},{"./sandwichMaker":5}],4:[function(require,module,exports){
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
},{"./sandwichMaker":5}],5:[function(require,module,exports){
'use strict';
// Variable declaration
var SandwichMaker = {
  totalPrice: 0,

  addTopping (toppingPrice) {
    // NEW LEXICAL "THIS", now needed or else totalPrice will be undefined (doesn't default to looking up anymore)
    this.totalPrice += toppingPrice;
  },

  resetTotalPrice () {
    this.totalPrice = 0;
  },

  getTotalPrice () {
    return this.totalPrice;
  },
  
};
module.exports = SandwichMaker;
console.log("SandwichMaker load test");
// module.exports = SandwichMaker;

let Meat = require("./meat");
// console.log("Meat test: ", Meat);
// console.log(Meat("ham"));

let Bread = require("./bread");
// console.log("Bread test: ", Bread);
// console.log(Bread("wheat"));

let Veggies = require("./veggies");
// console.log("Veggies test: ", Veggies);
// console.log(Veggies("lettuce"));

let Cheese = require("./cheese");
// console.log("Cheese test: ", Cheese);
// console.log(Cheese("swiss"));

let Condiments = require("./condiments");
// console.log("Condiments test: ", Condiments);
// console.log(Condiments("catsup"));


// old primary.js


// Declare initial variables
let container = document.getElementById("container");
let breadSelector = document.getElementById("breadSelector");
let meatSelector = document.getElementById("meatSelector");
let cheeseSelector = document.getElementById("cheeseSelector");
let veggiesSelector = document.getElementById("veggiesSelector");
let condimentsSelector = document.getElementById("condimentsSelector");
let selectors = [];
selectors.push(breadSelector, meatSelector, cheeseSelector, veggiesSelector, condimentsSelector);

// Variable to hold the final price. Default to 0.
let finalSandwichPrice = 0;

// Variable to hold toppings (of the same type) that the user selects
let selectedToppings;

/* Cirriculum Note: 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// Master function to be called for each selector change
function choiceHandler(element) {
  // Reset DOM and totalPrice
  container.innerHTML = '';
  SandwichMaker.resetTotalPrice();

  // Get the values chosen from the DOM
  // forEach with if statement for each topping, running correlating method to send user selection and return one price per call
  selectors.forEach(function(element){
    // Declare local variable for collection of options 
    // *HTML COLLECTION* - can only use .length and .item(index) instead of normal array methods
    var selectedToppings = element.selectedOptions;

    var elementName = element.name;

    for (var i = 0; i < selectedToppings.length; i++) {
      // Declare variable for current item's value in HTML Collection 
      var currentTopping = selectedToppings.item(i).value;
      // Declare variable for current item's name in HTML Collection (used in DOM injection)
      var currentToppingName = selectedToppings.item(i).text;
      // Declare private variable for addMeat call with currentTopping value argument
      switch (elementName)  {
        case "Bread": 
        var foodComponent = Bread(currentTopping);
        break;
        case "Meat": 
        var foodComponent = Meat(currentTopping);
        break;
        case "Cheese": 
        var foodComponent = Cheese(currentTopping);
        break;
        case "Veggies": 
        var foodComponent = Veggies(currentTopping);
        break;
        case "Condiments": 
        var foodComponent = Condiments(currentTopping);
        break;
      } 
      // Update the DOM with Current Topping and Food Component (addMeat should update the final price)
      container.innerHTML += `<p>Add ${currentToppingName}: $${foodComponent.toFixed(2)}</p>`;
    };
  });
  // Add final price to the DOM outisde of the selectors loop
  container.innerHTML += `<p>Sandwich Total Price: $${SandwichMaker.getTotalPrice().toFixed(2)}</p>`;
  // console.log("selectedTopping: ", selectedToppings);



};

// experimental forEach event listener add
selectors.forEach(function(element){
  element.addEventListener("change", choiceHandler);
  // console.log("element.name: ", element.name);
});


},{"./bread":1,"./cheese":2,"./condiments":3,"./meat":4,"./veggies":6}],6:[function(require,module,exports){
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
},{"./sandwichMaker":5}]},{},[5])


//# sourceMappingURL=bundle.js.map
