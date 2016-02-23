// Now that the test suite exists, write a simple application to implement the functionality.

// In an HTML file, have two elements: a textarea and a button.
// When the button is clicked, extract the contents of the textarea and validate it against the following rules.
// There should only be alphanumeric characters in the text. No special characters like $%^&*.
// No duplicate words allowed.
// Word count should be less than 100.

'use strict';

// DOM variables
$(document).ready(()=>{
	console.log("load test");
	let userInput = $("#userInput");
	let button = $("#button");

	// Button Click Event Handler
	$(button).click(()=>{
		let currentVal = userInput.val();
		console.log("currentVal: ", currentVal);
		// if any of the three checks fail, failure console log appears
		if ((!checkWordCount(currentVal)) || (!duplicateCheck(currentVal)) || (!verifyAlphaNumeric(currentVal))) {
			console.log("Validation Failure");
		} else {
			console.log("String Validated");
		}
	});

});

// check for word count higher than 100
function checkWordCount (testString) {
	let testStringArray = testString.split(" ");
	console.log(testStringArray);
	return testStringArray.length < 100;
}

// check for duplicate words
function duplicateCheck (testString) {
	let testStringArray = testString.split(" ");
	// set up Boolean return with array length vs ES6 Set with size attribute (only returns unique values)
	return testStringArray.length === new Set(testStringArray).size;
}

// use reg.test to test for characters other than alphanumeric
function verifyAlphaNumeric (testString) {
	// regex for only a-z 0-9 (+ is one or more time, $ is end of string, i is case insensitive)
	let reg = /^[a-z0-9]+$/i;
	return reg.test(testString);
}

