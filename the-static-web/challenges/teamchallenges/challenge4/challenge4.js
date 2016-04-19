// Create grid variable
var tictacgrid = document.createElement("div");
tictacgrid.className = "tictacgrid";
var button = document.getElementById("initButton");
var container = document.getElementById("container");
// Declare gridbox element early to establish global scope (needed for later event listener)
var gridBox = "";
var gridValues = [];

// X player points
var xArray = [];

// O player points
var oArray = [];

// Stalemate array
var stalemate = [];

// Initial pole value placeholder
var pole = "";


function winConditionTest(array) {
	// columns left to right, rows top to bottom, diagonals
	if ((array.includes(0) && array.includes(3) && array.includes(6)) || 
		(array.includes(1) && array.includes(4) && array.includes(7)) || 
		(array.includes(2) && array.includes(5) && array.includes(8)) ||
		(array.includes(0) && array.includes(1) && array.includes(2)) ||
		(array.includes(3) && array.includes(4) && array.includes(5)) ||
		(array.includes(6) && array.includes(7) && array.includes(8)) ||
		(array.includes(0) && array.includes(4) && array.includes(8)) ||
		(array.includes(2) && array.includes(4) && array.includes(6))) {
		return true;
	} else return false;
}

// Check for stalemate as an else after no win conditions have been met
// if (stalemate.length === 8) {end game draw alert}



// Gameplay function to determine X/O and win conditions, called with the object argument from constructed boxes
var gamePlay = function(obj) {
	console.log("gamePlay init");
	// Log clicked element
	console.log("this place: ", obj.place);
	console.log("tictacgrid.children: ", tictacgrid.children);
	console.log("pre if statement obj.character: ", obj.character);
	if (obj.character === "") {
		// Alternate between state X/O and store within object
		// Log the space in available spaces array
		console.log("stalemate array: ", stalemate);
		if (pole === "X") {
			obj.character = "X";
			xArray.push(obj.place);
			pole = "O";
		} else if (pole === "O") {
			obj.character = "O";
			oArray.push(obj.place);
			pole = "X";
		} else {
			// Else statement when the space is already taken	
			console.log("space occupied");
		}		
		obj.gridElement.classList.add("occupied");
	} else {
		console.log("Test Disabled Click Log");
	}

	// Add occupied class to the square and object

	// Add current character to the inner HTML
	console.log("obj.character", obj.character);
	obj.gridElement.innerHTML = `<p>${obj.character}</p>`;

	// Win/Stalemate Checks
	stalemate.push(obj.place);
	if (winConditionTest(xArray)) {
		alert("Player X Wins");
		disableAll();
	} else if (winConditionTest(oArray)) {
		alert("Player O Wins");
		disableAll();
	}
	if (stalemate.length >= 9) {
		alert("Stalemate!");
		disableAll();
	}
		// Add reset
};


// Constructor function for each box
function Box(positionName, place) {
	this.positionName = positionName;
	this.place = place;
	this.gridElement = document.createElement("div");
	this.gridElement.className = "gridBox";
	this.character = "";
	this.gridElement.innerHTML = `<p>${this.character}</p>`;
	// Add square click handler function; passing the invocation of gamePlay function (not the value of running gamePlay as added before ("click", gamePlay);)
	var that = this;
	this.gridElement.addEventListener("click", function(){
		gamePlay(that);
	});
};

// Create 9 box objects with position names and places
var box1 = new Box("topleft", 0);
var box2 = new Box("topmid", 1);
var box3 = new Box("topright", 2);
var box4 = new Box("midleft", 3);
var box5 = new Box("center", 4);
var box6 = new Box("midright", 5);
var box7 = new Box("botleft", 6);
var box8 = new Box("botmid", 7);
var box9 = new Box("botright", 8);

// Define grid init function
function gridInit() {
	console.log("Grid Init");
	// Append tictac grid to the container
	container.appendChild(tictacgrid);
	// clear DOM container

	console.log("tictacgrid.children: ", tictacgrid.children);

	// fill grid objects onto the page
	for (var i = 0; i < gridValues.length; i++) {
		var currentGrid = gridValues[i];
		// Append each object to the DOM under the tictacgrid parent
		tictacgrid.appendChild(currentGrid.gridElement);
		// console.log("currentGrid.gridElement: ", currentGrid.gridElement);
		console.log("currentGrid.positionName: ", currentGrid.positionName);
	};
	// Clean off board and reset initial character to X
	pole = "X";
	xArray = [];
	oArray = [];
	stalemate = [];
};

function disableAll() {
	console.log("disableAll init");
	var ticTacChildren = tictacgrid.children; //HTML Collection
	for (var i = 0; i < ticTacChildren.length; i++) {
		var currentChild = ticTacChildren[i];
		currentChild.classList.add("occupied");
	};
	// Loop through objects and change obj.character to J (in order to disable gamePlay if statement)
	console.log("gridValues: ", gridValues);
	for (var i = 0; i < gridValues; i++) {
	var currentBox = gridValues[i];
	console.log("currentBox: ", currentBox);
	currentBox.character = "J"; 
	console.log("currentBox.character: ", currentBox.character);
	};
	console.log("Post gridValues: ", gridValues);

};

// Manually add each box object to the gridValues array
gridValues.push(box1, box2, box3, box4, box5, box6, box7, box8, box9);
console.log("gridValues: ", gridValues);


// Init button event listener
button.addEventListener("click", gridInit);



// Create a grid of nine boxes
// When any box is clicked a red X appears
// When the next box is clicked a Blue O appears
// #1 and #2 are repeated until a row of 3 of the same character is created
// When a win happens:
// Alert the players who won
// Disallow any further clicks on the game board
// Display a play again button that resets the game
// For a tie:
// Alert players that game has ended in a tie
// Display a play again button that resets the game