'use strict'; // Strict mode

// Declare DOM element variables
var container = document.getElementById("container");
var select;
var categoriesContent = "";

// Event listeners addition (in other exercises this would be on another page)
function addEvents () {
	select = document.querySelector(".selectDropdown");
	// Add event for select dropdown (on the page by this function's invocation)
	select.addEventListener("change", function(){
		
		var seasonValue = parseInt(this.value);
		console.log("seasonValue log: ", seasonValue);

		// run page populate in update mode
		pagePopulate(seasonValue);
	});
}

// Separate function to use in IIFE (callback on load event, guaranteeing that the JSON data will be available by that point)
function pagePopulate (seasonValue) {

	// Clear DOM
	container.innerHTML = "";

	// Get products and categories from IIFE functions
	var productsData = SalesMan.getProducts(); 
	var categoriesData = SalesMan.getCategories(); 
	var catArray = categoriesData.categories;

	console.log("pagePopulate Start");

	// Evaluate the page's season select option (if any) while looping through objects
	// THEN populate to page

	// Categories Populate Section (only if it hasn't loaded before)
	if (categoriesContent === "") {
		categoriesContent = `<select class="selectDropdown">`;
		categoriesContent += `<option value="0" selected disabled>Select Season</option>`;
		console.log("catArray: ", catArray);
		catArray.forEach(function(object){
			categoriesContent += `<option value="${object.id}">${object.season_discount}</option>`;
			console.log("object: ", object); 
		});
		categoriesContent += `</select>`;
	}
	// Keeping this outside if statement to keep categories on page as first content
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
		var displayPrice = currProd.price;
		var catName;
		var catDiscount;
		catArray.forEach(function(element){
			if (element.id === catId) {
				catName = element.name;
				console.log("catName: ", catName);
				catDiscount = element.discount;
			}
		});
		if (catId === seasonValue) {
			displayPrice = (currProd.price - (currProd.price * catDiscount)).toFixed(2);
			console.log("displayPrice: ", displayPrice);
		};
		productsContent += `<p class="department" value="${catId}">Department: ${catName}</p>`;
		productsContent += `<p class="price">Price: ${displayPrice}</p>`;
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
					pagePopulate(0);
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

// Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. 
// Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. 
// As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

// For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

// The two JSON representations above should be in two files: products.json, and categories.json. 
// You should load both file via XHRs and store the contents in two different JavaScript variables in your code.