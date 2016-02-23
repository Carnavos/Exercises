'use strict';

// Write a test suite to validate your JavaScript functions.

let bigBoy = "Artisan wayfarers fap lo-fi meditation fingerstache. Narwhal offal banh mi pour-over before they sold out dreamcatcher. Disrupt roof party chambray cray, whatever meggings taxidermy. Quinoa cold-pressed raw denim kickstarter, brunch sustainable tousled four dollar toast literally banh mi swag put a bird on it aesthetic pickled. Seitan marfa food truck, poutine iPhone jean shorts pop-up. Helvetica chartreuse pop-up, neutra distillery cornhole cronut brunch bushwick artisan bespoke. Austin slow-carb actually, YOLO drinking vinegar blue bottle whatever thundercats you probably haven't heard of them schlitz offal bitters leggings migas intelligentsia.Waistcoat paleo twee meditation drinking vinegar vegan. Whatever helvetica 3 wolf moon, ethical gastropub cold-pressed pabst forage cardigan tattooed pinterest poutine pork belly seitan salvia. Mustache godard before they sold out, fap seitan tacos tattooed whatever squid williamsburg flannel cardigan forage. Poutine food truck drinking vinegar kickstarter, kale chips typewriter vice brooklyn tousled vinyl pork belly beard fanny pack butcher health goth. Single-origin coffee gluten-free pour-over migas poutine, VHS bespoke tilde ugh franzen letterpress shoreditch before they sold out. Tousled truffaut pitchfork, beard pug chillwave gentrify plaid roof party retro. Pabst kitsch deep v intelligentsia 90's gluten-free readymade, kickstarter brunch forage.";
let dubbleTrubble = "Jerry Jerry Jerry Jerry";
let nonAlphaNumeric = "*%^";

describe("The specifications for the Word Checker functionality", ()=>{

	// There should be a function defined with the name checkWordCount.
	it("should be a function defined with the name checkWordCount", ()=>{
		expect(checkWordCount).toBeDefined();
	});
	
	// That function should return false if a string sent to it has more than 100 words in it.
	it("should return false if a string sent to it has more than 100 words in it", ()=>{
		expect(checkWordCount(bigBoy)).toBeFalsy();
	});
	
	// There should be a function defined with the name duplicateCheck.
	it("should be a function defined with the name duplicateCheck", ()=>{
		expect(duplicateCheck).toBeDefined();
	});
	
	// That function should return false if a string has duplicate words in it.
	it("should return false if a string has duplicate words in it", ()=>{
		expect(duplicateCheck(dubbleTrubble)).toBeFalsy();
	});
	
	// There should be a function defined with the name verifyAlphaNumeric.
	it("should be a function defined with the name verifyAlphaNumeric", ()=>{
		expect(verifyAlphaNumeric).toBeDefined();
	});
	
	// That function should return false if there are any non-alphanumeric characters in a string.
	it("should return false if there are any non-alphanumeric characters in a string", ()=>{
		expect(verifyAlphaNumeric(nonAlphaNumeric)).toBeFalsy();
	});


});