
// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

// DOM variables
var output = document.getElementById("output");
var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton");
var divideButton = document.getElementById("divideButton");
var num1value = document.getElementById("firstNum").value;
var num2value = document.getElementById("secondNum").value;

// Event Listeners, using Lambda expressions  (passing the simple add/subtract functions (which return simple integers) to the larger calculator function)
addButton.addEventListener("click", function(){
	captureVals();
	output.innerHTML = calculator(num1value, num2value, add);
});

subtractButton.addEventListener("click", function(){
	captureVals();
	output.innerHTML = calculator(num1value, num2value, subtract);
});

multiplyButton.addEventListener("click", function(){
	captureVals();
	output.innerHTML = calculator(num1value, num2value, multiply);
});

divideButton.addEventListener("click", function(){
	captureVals();
	output.innerHTML = calculator(num1value, num2value, divide);
});

// Attempt at DRY principals not to repeat these lines in every event listener
function captureVals() {
	// Using parseInt to store the value as an integer (was defaultly storing as a string)
	num1value = parseInt(document.getElementById("firstNum").value);
	num2value = parseInt(document.getElementById("secondNum").value);
};

function multiply (num1, num2) {
	return num1 * num2;
};

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


function add (num1, num2) {
	return num1 + num2;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


function subtract (num1, num2) {
	return num1 - num2;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


function divide (num1, num2) {
	return num1 / num2;
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function calculator(num1, num2, calcFunction) {
	console.log(`calculator: `, calcFunction(num1, num2));
	return calcFunction(num1, num2);
};

calculator(4, 5, add);

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

