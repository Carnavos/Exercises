var button = document.getElementById("button");
var square = document.getElementById("square");

// Couldn't store/recall initial css properties into variables; switched to all JS styling as result. 
// (later declared initHeight/Width initially recalled empty)
square.style.height = "100px";
square.style.width = "100px";
square.style.backgroundColor = "red";


button.addEventListener("click", function(){
	// logging square initial style values
	var initHeight = square.style.height;
	console.log("initHeight: ", initHeight);
	var initWidth = square.style.width;
	console.log("initWidth: ", initWidth);
	var initColor = square.style.backgroundColor;
	console.log("initColor: ", initColor);

	// Blowing up square and turning it blue
	square.style.height = "200px";
	square.style.width = "200px";
	square.style.backgroundColor = "blue";

	// After 3 seconds (3000 value below), returning square to initial values
	window.setTimeout(function(){
		console.log("timeout test");
		square.style.height = initHeight;
		square.style.width = initWidth;
		square.style.backgroundColor = initColor;
		console.log("restored");		
	}, 3000);
});

// Add a red, 100px x 100px div and a button to a basic HTML page
// When the button is clicked, make the div double in size, and change the color from red to blue.
// After 3 seconds, make the div revert to its original size and color.