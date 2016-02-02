// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.


// Implement the logic in the reversal function that reverses the order of the characters in the string, 
	// and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, 
	// and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. 
	// If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, 
	// set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

// DOM element variables
var input = document.getElementById("userInput").value;
var button = document.getElementById("button");
var container = document.getElementById("container");

var testString = "racecar";

// input validation for only letters, using regex expression and the .match method to check for equality (string !== match was not working)
function letterValidate(string) {
	var accepted = /^[a-zA-Z]+$/;
	if (!string.match(accepted)) {
		console.log("unacceptable input");
		return false; // Halts the next step in the event listener
	} else if (string.match(accepted)) {
		console.log("acceptable string");
		return true; // Allows procession in later event listener statement
	}
};

// Event handler
button.addEventListener("click", function(){
	input = document.getElementById("userInput").value;
	if (letterValidate(input)) {
		console.log("input: ", input);
		container.innerHTML = "";
		container.innerHTML += `<p>Original Input: ${input}</p><p>Reversed: ${reversal2(input)}</p><p>Alphabetical: ${alphabits(input)}</p><p>Palindrome: ${palindrome(input)}</p>`;
	}
});

// function which reverses the characters in a string by turning it into an array then using the reverse array method (then returning to string)
function reversal(string) {
	return string.split('').reverse().join('');
}

// High performance version of the reverse function (much faster apparently) using a decrementing for loop to concatenate the characters 
function reversal2(string) {
	var newString = '';
	// string.length - 1 key here, nothing would be at position[string.length]
	for (var i = string.length -1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
};

function alphabits(string) {
	function caseInsensitiveSort(strA, strB) {
		// Using localCompare on lowercased strings, similar to the default sort function except not used on an array, but comparing two values
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
  }
  // returns the same string split into array then an array method used, concatenated back into a string
	return string.split('').sort(caseInsensitiveSort).join('');
}

function palindrome(string) {
	if (reversal2(string) === string) {
		return `${string} is a palindrome`;
	}
}

// console.log("reversal(testString): ", reversal(testString));
// console.log("reversal2(testString): ", reversal2(testString));
// console.log("alphabits(testString): ", alphabits(testString));
// console.log("palindrome(testString): ", palindrome(testString));
