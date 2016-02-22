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

