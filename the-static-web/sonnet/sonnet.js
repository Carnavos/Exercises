// Declare variable for sonnet element in HTML
var sonnetElement = document.getElementById("sonnet");

// Declare variable for HTML content
var sonnetContent = sonnetElement.innerHTML;

console.log("Sonnet text: ",sonnetContent);

// Finding position of "orphans"
console.log(sonnetContent.indexOf("orphans"));


console.log("The number of total Sonnet characters is currently " + sonnetContent.length);


sonnetContent = sonnetContent.replace("winter", "yuletide");

console.log("Sonnet replaced winter & yuletide: ",sonnetContent);


sonnetContent = sonnetContent.replace(/the /g, "a large ");

console.log("Sonnet replaced 'the' with 'a large': ",sonnetContent);

function updateSonnet() {
  sonnetElement.innerHTML = sonnetContent;
	sonnetElement.style.color = "red";
	sonnetElement.style.backgroundColor = "green";
}

sonnetElement.addEventListener("click", updateSonnet);

