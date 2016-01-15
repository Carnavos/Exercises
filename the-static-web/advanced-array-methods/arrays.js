var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML

var el = document.getElementById("planets");
var elcontent = el.innerHTML;

planets.forEach(addPlanetToHTML);

function addPlanetToHTML(element, index, array){
	elcontent += "<p>" + element + "</p>";
	console.log(elcontent);
}

el.innerHTML = elcontent;

// Use the map method to create a new array where the first letter of each planet is capitalized

var Planets = planets.map(function(nate){
	nate = nate.charAt(0).toUpperCase() + nate.slice(1);
	console.log(nate);
	return nate;
});

console.log("Planets: ", Planets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function(jeff){
	if (jeff.indexOf("e") !== -1) {
		return jeff;
	}
});

console.log("ePlanets: ", ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var moreWords = words.reduce(function(previousValue, currentValue, currentIndex, array){
	return previousValue + " " + currentValue;
})

console.log("moreWords: ", moreWords);