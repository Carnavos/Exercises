// Predator IIFE
var Predator = (function () {
	// Declare empty arrays which will hold JSON data
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
    	if (carnivores.length === 0) {
	      var loader = new XMLHttpRequest();
	      loader.open("GET", "carnivores.json");
	      loader.send();

	      loader.addEventListener("load", function () {
	        // Set the value of the private array
	        carnivores = JSON.parse(this.responseText);
	        console.log("carnivores: ", carnivores);
	        console.log("carnivores name: ", carnivores.carnivores[0]);

	        // Invoke the callback function so that the caller knows
	        // that the process is complete. Make sure to pass the 
	        // carnivore array as an argument.
	        callbackToInvoke(carnivores);
	      });
    	} else {
      	callbackToInvoke(carnivores);
    	}
    },
    loadHerbivores: function (callbackToInvoke) {
    	if (herbivores.length === 0) {
	      var loader = new XMLHttpRequest();
	      loader.open("GET", "herbivores.json");
	      loader.send();

	      loader.addEventListener("load", function () {
	        // Set the value of the private array
	        herbivores = JSON.parse(this.responseText);
	        console.log("herbivores: ", herbivores);
	        console.log("herbivores name: ", herbivores.herbivores[0]);

	        // Invoke the callback function so that the caller knows
	        // that the process is complete. Make sure to pass the 
	        // carnivore array as an argument.
	        callbackToInvoke(herbivores);
	      });
    	} else {
      	callbackToInvoke(herbivores);
    	}
    }
  }
})();