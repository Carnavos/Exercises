'use strict';

console.log("doc load test");

let add = function(num1, num2){
	return num1 + num2;
};

let subtract = function(num1, num2){
	return num1 - num2;
};

let multiply = function(num1, num2) {
	return num1 * num2;
};

let divide = function(num1, num2) {
	return num1 / num2;
};

let square = function(num1) {
	return num1 * num1;
};

let squareRoot = function(num1) {
	return Math.sqrt(num1);
};

let container = document.getElementById("container");

let pageContent = '';
pageContent += `<input type="text" id="userInput" placeholder="Enter number">`;
pageContent += `<button type="button" id="addButton" class="add">Add</button>`;
pageContent += `<button type="button" id="subtractButton" class="subtract">Subtract</button>`;
pageContent += `<button type="button" id="multiplyButton">Multiply</button>`;
pageContent += `<button type="button" id="divideButton">Divide</button>`;
pageContent += `<button type="button" id="squareButton">Square</button>`;
pageContent += `<button type="button" id="squareRootButton">Square Root</button>`;
container.innerHTML = pageContent;

let userInput = document.getElementById("userInput");
userInput.focus();
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let squareButton = document.getElementById("squareButton");
let squareRootButton = document.getElementById("squareRootButton");

container.addEventListener("click", ()=>{
	if (event.target.type === "button") {
		let targetId = event.target.id;
		let userNum1 = parseInt(userInput.value);
		userInput.value = '';
		alert("Enter second number");
		userInput.focus();
		userInput.addEventListener("keypress", (event)=>{
			if (event.which === 13) {
				let userNum2 = parseInt(userInput.value);
				switch (targetId) {
					case "addButton": 
						userInput.value = add(userNum1, userNum2) 
						break;
					case "subtractButton": 
						userInput.value = subtract(userNum1, userNum2) 
						break;
					case "multiplyButton": 
						userInput.value = multiply(userNum1, userNum2) 
						break;
					case "divideButton": 
						userInput.value = divide(userNum1, userNum2) 
						break;
					case "squareButton": 
						userInput.value = square(userNum1, userNum2) 
						break;
					case "squareRootButton":
						userInput.value = squareRoot(userNum1, userNum2) 
						break;
				}
			}
		});
	}
});

// Unit Tests

// Write unit tests to check for the existence of the following functions:
// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()
// Write unit tests that will verify the expected output of each of those functions.
// User Interface

// Create a user interface for a calculator. One text input and 6 buttons.
// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.