// Object constructor function for Cars with make and color, with color being the only required argument
function Car (color) {
  this.make = "Toyota"
  this.color = color;
};

// Add "Model" to the Car prototype via the prototype method, defined as a static value
Car.prototype.model = "Matrix";

// Create 3 new Cars with color arguments
var car1 = new Car("yellow");
var car2 = new Car("green");
var car3 = new Car("red");

// Test logs
console.log("car1: ", car1);
console.log("car2: ", car2);
console.log("car3: ", car3);

// Ensure the model was defined successfully
console.log("car1 Model: ", car1.model);

/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */



/*
Create a function, Model, to hold the
corresponding property and value
*/



// Define the prototype of a Model?


// Define a Car


// Define the prototype of a Car?


// Create the first car


// Create the second car

// Create the third car
