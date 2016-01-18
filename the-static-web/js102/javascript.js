var testArr = [2, 1, 3, 46, 4, 5, 25, 80];

// Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted. 
function arrSorter(arr) {
	var sortedArr = arr.sort();
	return sortedArr;
}

var testArrSorted = arrSorter(testArr);
console.log("testArrSorted: ", testArrSorted);

// Write a JavaScript function that accepts an array and returns a new array that contains elements in the array you passed in that are larger than 25.
function arrFilter(arr) {
	// Declare temp variable for array method filter. Filter callback anonymous function with element parameter.
	var filteredArr = arr.filter(function(element) {
		// In case the element is a string
		element = parseInt(element);
		console.log("after ParseInt: ",element);
		// Only returns elements over 25.
		if (element > 25) {
			// return statement necessary within filter method for anonymous function
			return element;
		}
	});
		// Return statement outside the filter method to return entire array
		return filteredArr;
}

var testArrFiltered = arrFilter(testArr);
console.log("testArrFiltered: ", testArrFiltered);


// Document Ready to encapsulate jQuery
$(document).ready(function(){
	//Declaring variables
	var $button = $('#button');
	var $input	= $("#input");
	var userInput;

	// Click event handler on the button which captures the input value
	$button.click(function(){
		userInput = $input.val();
		console.log("userInput: ", userInput);

		// Declare variable for user's input as transformed into an array, first with split method, then chained with map to convert strings to numbers
		var inputArray = userInput.split(",").map(function(i){
			return parseInt(i);
		});
		console.log("inputArray: ", inputArray);
		// Filtering the input array with previously declared function
		var inputArrayFiltered = arrFilter(inputArray);
		console.log("inputArrayFiltered: ", inputArrayFiltered);
		// Sorting above array with previously declared function
		var inputArrayFilteredAndSorted = arrSorter(inputArrayFiltered);
		console.log("inputArrayFilteredAndSorted: ", inputArrayFilteredAndSorted);

		// Looping through filtered/sorted input array and wrapping html <p> tags around each element/number
		var htmlContent = "";
		for (var i = 0; i < inputArrayFilteredAndSorted.length; i++) {
			htmlContent += "<div class='number'>" + inputArrayFilteredAndSorted[i] + "</div>";
		};
		$('.container').append(htmlContent);
	});	

});






// In your HTML, create one input field of type text and one <button> element.
// Attach an event handler to the button click with jQuery.
// Type in a comma-delimited list of integers into that input field (e.g. 10,3,5,67,22).
// When the button is clicked retrieve the value of the input field.
// Convert that string of comma-delimited numbers into an array.
// Pass that array into the function that finds numbers higher than 25. Remember how to convert strings to numbers?
// The array that is the result of that, pass it into the function that sorts the array.
// Loop over the sorted array and create a DOM string that wraps a
// element around each number (e.g. output += something).
// Give each <div> a class of "number".

// Write a CSS class that changes the font color of the even elements to red.
// Write a CSS class that changes the background color of the odd elements to azure.
// Push all of your code to Github.
// Send the link to your Github project to your assigned TA.