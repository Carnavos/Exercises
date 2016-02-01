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