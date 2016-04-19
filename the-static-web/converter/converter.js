// Define variables, not filling until button is clicked (Elsewise will load "undefined" when the page loads)

var userTemp;

var tempType;

// preconfiguring HTML section for filling

var tempArea = "";

var containerVar = document.getElementById("container");

function update() {
	// Filling html with temperature
	tempArea = "<p>" + userTemp + "</p>";
	containerVar.innerHTML = tempArea;	

		// Variable testing
	console.log("userTemp = " + userTemp);
	console.log("tempType = " + tempType);

	colorTreatment();
}


function convertTemp() {

	userTemp = document.getElementById('temperature').value;

	// Determine which temp type box was checked

	if (document.getElementById('celsius').checked) {
		tempType = document.getElementById('celsius').value;
	} else if (document.getElementById('fahrenheit').checked) {
		tempType = document.getElementById('fahrenheit').value;
	} else {
		tempType = "N/A";
	}

	transferTemp();

	// Display temperature
	update();

}

function transferTemp() {
	if (tempType === "fahrenheit") {
		userTemp = userTemp * 1.8 + 32;
	} else if (tempType === "celsius") {
		userTemp = (userTemp - 32) / 1.8;
	}
}

function colorTreatment() {
	if ((tempType === "fahrenheit" && userTemp > 90) || (tempType === "celsius" && userTemp > 32)) {
		containerVar.style.color = "red";
	}	else if ((tempType === "fahrenheit" && userTemp < 32) || (tempType === "celsius" && userTemp < 0)) {
		containerVar.style.color = "blue";		
	} else {
		containerVar.style.color = "green";
	}
}


function clearOut() {
	console.log("clear attempt");

	// Reset temperature display area to blank
	document.getElementById("container").innerHTML = "";
}

// Prewritten Content

function toCelsius () {
	tempType = "celsius";
	userTemp = (userTemp - 32) / 1.8;
	console.log(userTemp);
	return userTemp;
}

function toFahrenheit () {
	tempType = "fahrenheit";
	userTemp = userTemp * 1.8 + 32;
	console.log(userTemp);
	return userTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("button");

// Declaring same for reset button
var resetButton = document.getElementById('resetter');

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	userTemp = document.getElementById('temperature').value;
  console.log("event", clickEvent);
  if (document.getElementById('celsius').checked) {
  	toCelsius();
  } else if (document.getElementById('fahrenheit').checked) {
  	toFahrenheit();
  }
  update();
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// Ditto for reset button
resetButton.addEventListener("click", clearOut);
