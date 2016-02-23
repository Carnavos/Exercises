'use strict';
// initial methods and private price variable
let SandwichMaker = {
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
// export intial sandwichMaker object to use in modules (only addTopping is used)
module.exports = SandwichMaker;

// "require" method (made available by browserify install), returns only the exported value in each module.
// in this case, the export is a function, accepting one "choice" argument
let Meat = require("./meat");
let Bread = require("./bread");
let Veggies = require("./veggies");
let Cheese = require("./cheese");
let Condiments = require("./condiments");

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

// function to be called for each selector change
function choiceHandler(element) {
  // Reset DOM and totalPrice
  container.innerHTML = '';
  SandwichMaker.resetTotalPrice();

  // Get the values chosen from the DOM
  // forEach with if statement for each topping, running correlating method to send user selection and return one price per call
  selectors.forEach((element) => {
    // Declare local variable for collection of options 
    // *HTML COLLECTION* - can only use .length and .item(index) instead of normal array methods
    let selectedToppings = element.selectedOptions;

    let elementName = element.name;

    for (let i = 0; i < selectedToppings.length; i++) {
      // Declare variable for current item's value in HTML Collection 
      let currentTopping = selectedToppings.item(i).value;
      // Declare variable for current item's name in HTML Collection (used in DOM injection)
      let currentToppingName = selectedToppings.item(i).text;
      // Declare empty variable to use in switch statement
      let foodComponent;
      // switch statement to call upon required modules for individual topping add methods
      switch (elementName)  {
        case "Bread": 
          foodComponent = Bread(currentTopping);
          break;
        case "Meat": 
          foodComponent = Meat(currentTopping);
          break;
        case "Cheese": 
          foodComponent = Cheese(currentTopping);
          break;
        case "Veggies": 
          foodComponent = Veggies(currentTopping);
          break;
        case "Condiments": 
          foodComponent = Condiments(currentTopping);
          break;
      } 
      // Update the DOM with Current Topping and Food Component (addMeat should update the final price)
      container.innerHTML += `<p>Add ${currentToppingName}: $${foodComponent.toFixed(2)}</p>`;
    };
  });
  // Add final price to the DOM outisde of the selectors loop
  container.innerHTML += `<p>Sandwich Total Price: $${SandwichMaker.getTotalPrice().toFixed(2)}</p>`;

};

// forEach event listener add
selectors.forEach((element) =>{
  element.addEventListener("change", choiceHandler);
});

