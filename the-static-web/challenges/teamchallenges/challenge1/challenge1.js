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
	this.cardElement.innerHTML = this.consolidateHTML;

	// console.log("testing cardElement traversal: ", cardElement.getElementsByClassName('colorPick')[0]); works
	var backgroundButton = this.cardElement.getElementsByClassName('backgroundColorPickButton')[0];
	console.log("backgroundButton: ", backgroundButton);
	var deleteButton = this.cardElement.getElementsByClassName('clearButton')[0];
	console.log("deleteButton: ", deleteButton);
	
	
	// Functions for modifications
	this.modBackgroundColor = function() {
		var newColor = backgroundButton.value;
		this.backgroundButtonValue = newColor;
		console.log("newColor: ", newColor);
		console.log("mod attempted");
		updateDOM();
	};

	this.workingTest = function(){
		console.log('workingTest');
	};	


	// Add internal event listeners
	deleteButton.addEventListener("click", this.workingTest.bind(this));
	// Add event listener for background color change
	backgroundButton.addEventListener("input", function(){
		console.log("test backgroundButton event listener");
	}); //Might need color parameter	
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
	// Pushing new card into the array "deck," from which it will be used to update the DOM
	cardDeck.push(card);
	updateDOM();
}

function updateDOM(obj) {
	// Delete the contents of the page
	container.innerHTML = "";

	// loop through the cardDeck array and add HTML to the page. intended to chain after each color change/delete.
	for (i = 0; i < cardDeck.length; i++) {
		console.log(cardDeck[i].cardElement);
		container.innerHTML += cardDeck[i].consolidateHTML;
	}
	console.log("DOM Updated");
};





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