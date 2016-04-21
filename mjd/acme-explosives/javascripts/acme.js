'use strict';

function getCategory() {
	return new Promise((resolve, reject) => {
		// Open new http request
		let loader = new XMLHttpRequest();

		// Add the standard loader event listener
		loader.addEventListener("load", function() {
			// parse data and traverse one level deep into the JSON
			let categories = JSON.parse(this.responseText).categories;
			// send the parsed JSON to the "then" code written where the promise function is invoked (this function returns a promise, the invocation IS a promise)
			resolve(categories);
		});

		// reject nested inside the error event on the http request, triggers the second statement in the "then" statement where promise is invoked
		loader.addEventListener("error", function() {
			reject();
		});

		loader.open("GET", "categories.json");
		loader.send();
	});
}

function getTypes() {
	return new Promise((resolve, reject) => {
		// Open new http request
		let loader = new XMLHttpRequest();

		// Add the standard loader event listener
		loader.addEventListener("load", function() {
			// parse data and traverse one level deep into the JSON
			let types = JSON.parse(this.responseText).types;
			// send the parsed JSON to the "then" code written where the promise function is invoked (this function returns a promise, the invocation IS a promise)
			resolve(types);
		});

		// reject nested inside the error event on the http request, triggers the second statement in the "then" statement where promise is invoked
		loader.addEventListener("error", function() {
			reject();
		});

		loader.open("GET", "types.json");
		loader.send();
	});
}

function getProducts() {
	return new Promise((resolve, reject) => {
		// Open new http request
		let loader = new XMLHttpRequest();

		// Add the standard loader event listener
		loader.addEventListener("load", function() {
			// parse data and traverse one level deep into the JSON
			let products = JSON.parse(this.responseText).products;
			// send the parsed JSON to the "then" code written where the promise function is invoked (this function returns a promise, the invocation IS a promise)
			resolve(products);
		});

		// reject nested inside the error event on the http request, triggers the second statement in the "then" statement where promise is invoked
		loader.addEventListener("error", function() {
			reject();
		});

		loader.open("GET", "products.json");
		loader.send();
	});
}


$(document).ready(() =>{

	let container = $("#container"),
			categorySelect = $('#categorySelect'),
			// declare object for more concise storage of user's category choice throughout event listener promise resolve function scopes
			userChoice = {};

	categorySelect.on("change", function(){
		userChoice.categoryId = parseInt(this.value);
		console.log(`userChoice.categoryId: `, userChoice.categoryId);

		getCategory().then(
			function(categoryData) {
				console.log(`categoryData: `, categoryData);
				userChoice.categoryName = categoryData.filter((category) => category.id === userChoice.categoryId)[0].name;
				console.log(`userChoice.categoryName: `, userChoice.categoryName);
				return getTypes();
			},
			function(categoryData) {
				console.log(`categories data failure`);
			}
		).then(
			function(typesData) {
				console.log(`typesData: `, typesData);
				userChoice.chosenTypes = typesData.filter((type) => type.category === userChoice.categoryId);
				console.log(`userChoice.chosenTypes: `, userChoice.chosenTypes);
				return getProducts();
			},
			function(typesData) {
				console.log(`types data failure`);
			}

		).then(
			function(productsData) {
				// take user type id and find/return all products with the matching type property number
				// userChoice.chosenProducts = userChoice.chosenTypes.map((type) => {
				// 	// return type.id === 
				// 	return productsData.filter((product) => {
				// 		return type.id === product.type;
				// 	});
				// });
				userChoice.chosenProducts = productsData.forEach((product) => {
					// console.log(`product.type: `, product.type);	
					// return userChoice.chosenTypes.includes(product.type);
					console.log(`userChoice.chosenTypes.includes(product.type): `, userChoice.chosenTypes.includes(product.type));
				});
				console.log(`productsData: `, productsData);
				console.log(`userChoices.chosenProducts: `, userChoice.chosenProducts);
				// Code to initiate menu/DOM populate
			},
			function(productsData) {
				console.log(`products data failure`);
			}
		);

	});

	// iterates over an array of data, populating the page with cards in specified rows, category used for CSS styling
	function menuPopulate(rowAmount, itemArray, category) {
		let menuContent = ``; // initialize/reset menuContent
		$(container).html(''); // clear page of current content
		let bootColWidth = 12 / rowAmount;
		// loop over items from data (robots, weapons, mods) and populate to page
		itemArray.forEach((element, index) => {

			let cssFormattedName = element.replace(/ /g, "-");
			console.log(`cssFormattedName ${element}: `, cssFormattedName);

			// Open Row Condition
			if (index % rowAmount === 0) {
				menuContent += `<div class="row">`;
				console.log("Row Start");
			}
			// Card Create
			menuContent +=  `<button class="col-md-${bootColWidth} card ${category} ${cssFormattedName}">${element}` +
											`</button>`;

			// Close Row Conditions
			if ((index % rowAmount === (rowAmount - 1)) || (index === itemArray.length - 1)) {
				console.log("Row End");
				menuContent += `</div>`;
			}
		});

		$(container).append(menuContent);
	}

});


