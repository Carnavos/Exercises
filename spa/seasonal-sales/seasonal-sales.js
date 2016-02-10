// 'use strict'; // Strict mode

// Declare DOM element variables
var container = document.getElementById("container");

// Event listeners addition (in other exercises this would be on another page)
function addEvents () {
	// Add event for select dropdown (should be on the page by this function's invocation)
	var select = document.querySelector(".selectDropdown");
	select.addEventListener("change", function(){
		var seasonValue = parseInt(this.value);
		console.log("seasonValue log: ", seasonValue);

		// get products and categories
		var prodArray = SalesMan.getProducts().products;
		console.log("prodArray: ", prodArray);
		var categData = SalesMan.getCategories().categories;
		console.log("categData: ", categData);
		var selectedDiscount;

		for (var i = 0; i < prodArray.length; i++) {
			var currProd = prodArray[i];
			var currElement = document.getElementById(i);
			console.log("currElement: ", currElement);
			var currSeason = currElement.children[1];
			console.log("currSeason: ", currSeason);
				// if (currSeason === )

		};

		// for (var i = 0; i < categData.length; i++) {
		// 	var currentCat = categData[i];
		// 	console.log("currentCat: ", currentCat);
		// 	var currentSeasonId = currentCat.id;
		// 	console.log("currentSeasonId: ", currentSeasonId);
		// 	var currentDiscount = currentCat.discount;
		// 	console.log("currentDiscount: ", currentDiscount);
		// 	if (currentSeasonId === seasonValue) {
		// 		selectedDiscount = currentDiscount;
		// 		console.log("selectedDiscount: ", selectedDiscount);
		// 	}
		// }

		// for (var i = 0; i < prodArray.length; i++) {
		// 	var currentProd = prodArray[i];
		// 	// console.log("currentProd: ", currentProd);
		// 	var currentId = currentProd.category_id;
		// 	if (seasonValue === currentId) {
		// 	}
		// }
		// Declare elements on the page to affect
	// 	if (this.value === prodData)
	});
};

// Separate function to use in IIFE (callback on load event, guaranteeing that the JSON data will be available by that point)
function pagePopulate () {
	// Get products and categories from IIFE functions
	var productsData = SalesMan.getProducts(); 
	var categoriesData = SalesMan.getCategories(); 

	console.log("pagePopulate Start");

	// Categories Populate Section
	var categoriesContent = `<select class="selectDropdown">`;
	categoriesContent += `<option value="0" selected disabled>Select Season</option>`;
	var catArray = categoriesData.categories;
	console.log("catArray: ", catArray);
	catArray.forEach(function(object){
		categoriesContent += `<option value="${object.id}">${object.season_discount}</option>`;
		console.log("object: ", object); 
	});
	categoriesContent += `</select>`;
	container.innerHTML += categoriesContent;


	// Products Populate Section
	var productsContent = `<div class='productsContainer'>`;
	var productsArray = productsData.products;

	for (var i = 0; i < productsArray.length; i++) {
		var currProd = productsArray[i];
		console.log("currentProd: ", currProd);
		productsContent += `<div class="product" id="${currProd.id}">`;
		productsContent += `<p>Product Name: ${currProd.name}</p>`;
		// Briefly dip into the categories array to find the product's matching category type 
		var catId = currProd.category_id;
		var catName;
		catArray.forEach(function(element){
			if (element.id === catId) {
				catName = element.name;
				console.log("catName: ", catName);
			}
		});
		productsContent += `<p class="department" value="${catId}">Department: ${catName}</p>`;
		productsContent += `<p class="price">Price: ${currProd.price}</p>`;
		productsContent += `</div>`;
	}

	// Closing off productsContainer div
	productsContent += `</div>`;
	container.innerHTML += productsContent;


	// Add event listeners after the DOM load
	addEvents();
};

// IIFE to practice separate load and consecutive DOM load callback function separation
var SalesMan = (function () {

	var products = [];
	var categories = [];


	return {

		loadProducts: function (callback) {
			if (products.length === 0) {
				var productsRequest = new XMLHttpRequest();
				productsRequest.open("GET", "products.json");
				productsRequest.send();
				productsRequest.addEventListener("load", function(){
					products = JSON.parse(this.responseText);
					console.log("Products Loaded");
					console.log("productsData: ", products);
					// SalesMan.loadCategories();
					callback();
				});
			} else {
				console.log("products else statement test");
				productsRequest.addEventListener("load", function(){
					products = JSON.parse(this.responseText);
					console.log("productsData: ", products);
				});
			}
		},

		// Open XHR for the Categories json file, with the load callback function event listener
		loadCategories: function () {
			if (categories.length === 0) {
				var categoriesRequest = new XMLHttpRequest();
				categoriesRequest.open("GET", "categories.json");
				categoriesRequest.send();
				categoriesRequest.addEventListener("load", function(){
					categories = JSON.parse(this.responseText);
					console.log("Categories Loaded");
					console.log("categoriesData: ", categories);
					pagePopulate();
				});
			} else {
				console.log("categories else statement");
				categoriesRequest.addEventListener("load", function(){
					categories = JSON.parse(this.responseText);
				});
			}
		}, 

		// Simple getter methods to be used by the event handler function (outside IIFE)
		getCategories: function() {
			return categories;
		},

		getProducts: function() {
			return products;
		}
	}
})();

// Call functions; first actions which run on the page
SalesMan.loadProducts(SalesMan.loadCategories);
// SalesMan.loadCategories(pagePopulate);

// Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. 
// Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. 
// As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

// For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

// The two JSON representations above should be in two files: products.json, and categories.json. 
// You should load both file via XHRs and store the contents in two different JavaScript variables in your code.