$(document).ready(function(){
	console.log("jQuery loaded");
	var $bigContainer = $("#bigContainer");
	console.log("$bigContainer: ", $bigContainer);
	var $container1 = $("#container1");
	var $container2 = $("#container2");
	var $container3 = $("#container3");
	console.log("$container1: ", $container1);

	// Create form element and append input and button elements within
	var $formElement = $("<div id='form'>");
	console.log("$formElement init: ", $formElement);
	$($formElement).append("<input type='text' class='userInput' placeholder='BG Color Value'>");
	$($formElement).append("<button class='button'>Change Color</button>");
	console.log("$formElement appended: ", $formElement);

	// Class selection click handler
	$(".card").on("click", function(){
		// Remove selected class from all elements
		$(".selected").removeClass("selected");
		// Add selected class to "this" element
		$(this).toggleClass("selected");
		// Prepend form to the top of the page
		$bigContainer.prepend($formElement);
		

		// Click function for color submit
		$(".button").click(function(){
			console.log("test color submit button");
			var $inputVal = $(".userInput").val();
			console.log($inputVal);
			$(".selected").css("backgroundColor", $inputVal);
			// Reset form to placeholder value
			// $($inputVal).val(" "); didn't work, needed to use base selector again (below)
			$(".userInput").val('');
		});
	});



	// End jQuery
});

// In HTML, create 3 divs
// Give each div a background color

// When one of the three divs is clicked do the following:
// Give the selected/clicked div a border to indicate it has been selected
// Reveal a form with an input box and a button
// The user should now be able to enter a color value in the input field.
// When the corresponding button is clicked, 
	// the currently selected div should change its background color to the color value the user entered in the input box.
// Finish in under 3 hours? Figure out how to do the same with jQuery.