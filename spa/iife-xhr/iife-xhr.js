// Declare element variables
var container = document.getElementById("container");

function showCarnivores (carnivores) {
	// Loop over carnivores and display on the DOM
	console.log("showCarnivores");
	var carnContent = `<h2>Carnivores</h2>`;
	var currentCarn;
	for (var i = 0; i < carnivores.carnivores.length; i++) {
		currentCarn = carnivores.carnivores[i];

		carnContent += `<h3>Name: ${currentCarn.name}</h3>`;
		carnContent += `<p>Danger Level: ${currentCarn.dangerLevel}</p>`;

	}
container.innerHTML += carnContent;
}

function showHerbivores (herbivores) {
// Loop over herbivores and display on the DOM
	var herbContent = `<h2>Herbivores</h2>`;
	for (var i = 0; i < herbivores.herbivores.length; i++) {
		var currentHerb = herbivores.herbivores[i];

		herbContent += `<h3>Name: ${currentHerb.name}</h3>`;
		herbContent += `<p>Plant Appetite: ${currentHerb.plantAppetite}</p>`;

	}
container.innerHTML += herbContent;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);