// create object/card constructor function
	// new card with properties for both internal color change buttons (innerHTML AND color value)
	// delete button property with innerHTML and delete card functionality

// unique id function which precurses object creation calls, added as event listener on the main button
	// unique ID used as argument in the constructor call, stores value somewhere in the new card
	// might not need to be used due to using "this.button" later on to change colors/delete

// DOM update function run after/at the end of any delete/color change function invocation

// Declare initial variables
var container = document.getElementById("cardContainer");
var button = document.getElementById("button");
var mainContent = ""; 
var inputVal = "";

// Declare empty array which will hold card objects
var cardDeck = [];

// Declare initial unique ID
var uniqueID = 0;

function idGenerator() {
	uniqueID++;
	console.log("idGenerator ID: ", uniqueID);
	return uniqueID;
}

// Card Class Object Constructor
// make sure to include the idGenerator result as the argument in subsequent call section of code
function Card(id, input) {
	this.uId = id;
	this.uInput = input;
	this.backgroundButtonValue = "#daa520"; // Goldenrod default
	this.fontColorPickValue = "#ffffff"; // White default

	// DOM injection HTML properties
	this.openingHTML = "<div class='card'><div class='cardEditBar'>";
	this.backgroundButtonHTML = "<input type=color id='backgroundColorPickButton' class='colorPick backgroundColorPickButton' value='" + this.backgroundButtonValue + "'>";
	this.fontColorPickButtonHTML = "<input type=color class='colorPick fontColorPickButton' value='" + this.fontColorPickValue + "'>";
	this.deleteButtonHTML = "<button class='clearButton'>Delete</button>";
	this.cardEditBarClosingHTML = "</div>";
	this.cardContentHTML = "<p class='cardContent'>" + this.uInput + "</p>";
	this.closingHTML = "</div>";

	this.consolidateHTML = this.openingHTML + this.backgroundButtonHTML + this.fontColorPickButtonHTML + this.deleteButtonHTML + this.cardEditBarClosingHTML + this.cardContentHTML + this.closingHTML;
	console.log(this.consolidateHTML);

	// HTML Element creation
	this.cardElement = document.createElement("div");
	console.log(this.cardElement);
	this.cardElement.innerHTML = this.consolidateHTML;

	// console.log("testing cardElement traversal: ", cardElement.getElementsByClassName('colorPick')[0]); works
	var backgroundButton = this.cardElement.getElementsByClassName('backgroundColorPickButton')[0];
	console.log("backgroundButton: ", backgroundButton);
	var fontColorPickButton = this.cardElement.getElementsByClassName('fontColorPickButton')[0];
	console.log("fontColorPickButton: ", fontColorPickButton);
	var deleteButton = this.cardElement.getElementsByClassName('clearButton')[0];
	console.log("deleteButton: ", deleteButton);
	
	// Defining "this" scope to save for within object's functions
	var that = this;
	
	// Functions for modifications
	// Background Color
	this.modBackgroundColor = function() {
		var newColor = backgroundButton.value;
		that.backgroundButtonValue = newColor;
		that.cardElement.firstChild.style.backgroundColor = newColor;
		console.log("bg newColor: ", newColor);
		console.log("mg mod attempted");
	};
	// Font Color
	this.modFontColor = function() {
		var newColor = fontColorPickButton.value;
		that.backgroundButtonValue = newColor;
		that.cardElement.firstChild.style.color = newColor;
		console.log("font newColor: ", newColor);
		console.log("font mod attempted");
	};

	this.deleteCard = function() {
		container.removeChild(that.cardElement);
	};

	this.workingTest = function(){
		console.log('workingTest');
	};	


	// Add internal event listeners
	// deleteButton.addEventListener("click", this.workingTest.bind(this)); test without bind below
	deleteButton.addEventListener("click", this.deleteCard);
	// Add event listener for background color change
	backgroundButton.addEventListener("input", this.modBackgroundColor);
	// Add event listener for font color change
	fontColorPickButton.addEventListener("input", this.modFontColor);	

	// Append/add the object's cardElement (fully formed div element with all html and events inside) to the DOM
	// (Also has worked outside the constructor, in the cardCreate function below as "container.appendChild(card.cardElement);")
	container.appendChild(this.cardElement);
};

// Card create function for Create button, to be called with already established input variable
function cardCreate() {
	var userInput = document.getElementById("userInput").value;
	console.log("userInput: ", userInput);
	// initialize with generation of new id
	var newId = idGenerator();
	console.log("testing idGenerator return: ", newId);
	// Declaring new instance of a card
	var card = new Card(newId, userInput);
	console.log("newCard object: ", card);
}


// Update DOM no longer needed due to appendChild and removeChild methods, which add dynamically updating elements
	// with all object properties and event handlers to the page. When setting style, page changes dynamically; no need to reupdate/populate DOM via another method

// function updateDOM(obj) {
// 	// Delete the contents of the page
// 	container.innerHTML = "";

// 	// loop through the cardDeck array and add HTML to the page. intended to chain after each color change/delete.
// 	for (i = 0; i < cardDeck.length; i++) {
// 		console.log(cardDeck[i].cardElement);
// 		container.innerHTML += cardDeck[i].consolidateHTML;
// 	}
// 	console.log("DOM Updated");
// };


// Add event listener for the card create button
button.addEventListener("click", cardCreate);




// Challenge #1
// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, 
// 		create a new card element in the DOM - similar to the quiz and group project. You decide the height/width of the card.
// Above the text on each card, there must be two input controls of type color.
// Above the text on each card, there must be a button element labeled Delete.

// When the user selects a color from the first input, 
//   then the background color of that card, and no other cards, should change to the color chosen.
// When the user selects a color from the second input, 
//   then the font color of that card, and no other cards, should change to the color chosen.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. 
//   Not just made invisible, actually removed from the DOM.
