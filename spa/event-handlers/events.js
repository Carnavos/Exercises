// Declare initial element variables
var output = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var input = document.getElementById("keypress-input");
var add_color = document.getElementById("add-color");
var make_large = document.getElementById("make-large");
var add_border = document.getElementById("add-border");
var add_rounding = document.getElementById("add-rounding");
var guinea_pig = document.getElementById("guinea-pig");

// Event listener/handler for clicking each section of the page
document.addEventListener("click", function(){
	output.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
});

// Event listener/handler for mousing over the header
pageTitle.addEventListener("mouseover", function(){
	output.innerHTML = `You moved your mouse over the header`;
});

// Event listener/handler for leaving the header
pageTitle.addEventListener("mouseout", function(){
	output.innerHTML = `You left me!`;
});

// Event listener/handler for typing into the input field
input.addEventListener("keyup", function(){
	// cut straight to the chase with no variable declaration
	output.innerHTML = input.value;
});

// Event listener/handler for clicking the Add Color button
add_color.addEventListener("click", function(){
	guinea_pig.classList.toggle("blue");
});

make_large.addEventListener("click", function(){
	guinea_pig.classList.toggle("hulkify");
});

add_border.addEventListener("click", function(){
	guinea_pig.classList.toggle("caged");
});

add_rounding.addEventListener("click", function(){
	guinea_pig.classList.toggle("rounded");
});

// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// Note: Output target is the output-target element.
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.