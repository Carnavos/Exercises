// Declare initial variables
var container = document.getElementById("container");
var breadSelector = document.getElementById("breadSelector");
var meatSelector = document.getElementById("meatSelector");
var cheeseSelector = document.getElementById("cheeseSelector");
var veggiesSelector = document.getElementById("veggiesSelector");
var condimentsSelector = document.getElementById("condimentsSelector");
var selectors = [];
selectors.push(breadSelector, meatSelector, cheeseSelector, veggiesSelector, condimentsSelector);

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold toppings (of the same type) that the user selects
var selectedToppings;

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
			switch (elementName)	{
				case "Bread": 
				var foodComponent = SandwichMaker.addBread(currentTopping);
				break;
				case "Meat": 
				var foodComponent = SandwichMaker.addMeat(currentTopping);
				break;
				case "Cheese": 
				var foodComponent = SandwichMaker.addCheese(currentTopping);
				break;
				case "Veggies": 
				var foodComponent = SandwichMaker.addVeggies(currentTopping);
				break;
				case "Condiments": 
				var foodComponent = SandwichMaker.addCondiments(currentTopping);
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

