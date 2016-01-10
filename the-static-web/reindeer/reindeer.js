
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

function reindeerSort (deerArray, colorArray) {
	// Start off the html with unordered list opening tag
	hohohoElement.innerHTML = "<ul>";
	for (i = 0; i < deerArray.length; i++) {
		var currentDeer = deerArray[i];
		var currentColor = colorArray[i];
		hohohoElement.innerHTML += "<li>" + currentColor + " " + currentDeer + "</li>";
	}
	hohohoElement.innerHTML += "</ul>";

}

reindeerSort(reindeer, colors);