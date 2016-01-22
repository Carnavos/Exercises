var bigContainer = document.getElementById("bigContainer");
console.log(bigContainer);
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");

function selectDiv() {
	// Query selector designated the first element on the page with the "selected" class
	var currentlySelected = document.querySelector(".selected");
	// if there's something with the selected class (not null), it is removed from the element's classList
	if (currentlySelected !== null) {
		currentlySelected.classList.remove("selected");
		// Also clearing out the form each time a new box is selected
		bigContainer.removeChild(bigContainer.firstChild);
	}
	console.log("currentlySelected: ", currentlySelected);
	console.log("this: ", this);
	// uses "this" to add "selected" class to currently clicked element
	this.classList.add("selected");
	// Re-identify currently selected element for color treatment
	currentlySelected = document.querySelector(".selected");

	// Create the new form element
	var formElement = document.createElement("div");
	// Insert html for button and input
	formElement.innerHTML = "<input type='text' class='userInput' placeholder='BG Color Value'><button class='button'>Change Color</button>";
	// user getElementsByClassName on created div to identify button and input elements (getElementById doesn't seem to work here)
	var button = formElement.getElementsByClassName('button')[0];
	var input = formElement.getElementsByClassName('userInput')[0];
	// Add click event handler to capture input value and change backgroundColor accordingly
	button.addEventListener("click", function(){
		console.log("button click test");
		var inputVal = input.value;
		currentlySelected.style.backgroundColor = inputVal;
	});

	// Prepend form to the page
	bigContainer.insertBefore(formElement, bigContainer.firstChild);
}

// Event listeners
container1.addEventListener("click", selectDiv);
container2.addEventListener("click", selectDiv);
container3.addEventListener("click", selectDiv);



// In HTML, create 3 divs
// Give each div a background color
// When one of the three divs is clicked do the following:
// Give the selected/clicked div a border to indicate it has been selected
// Reveal a form with an input box and a button
// The user should now be able to enter a color value in the input field.
// When the corresponding button is clicked, 
	// the currently selected div should change its background color to the color value the user entered in the input box.
// Finish in under 3 hours? Figure out how to do the same with jQuery.
