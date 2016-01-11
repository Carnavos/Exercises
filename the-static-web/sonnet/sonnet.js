
var sonnetElement = document.getElementById("sonnet");

var sonnetContent = sonnetElement.innerHTML;

console.log(sonnetContent);

// Finding position of "orphans"
console.log(sonnetContent.indexOf("orphans"));


// Test from cirriculum RegEx
// var phrase = "The lazy dog likes the weird fox";
// var newPhrase = phrase.replace(/o/g, "i");
// console.log(newPhrase);
// end snippet

console.log("The number of total Sonnet characters is currently " + sonnetContent.length);

sonnetContent = sonnetContent.replace("winter", "yuletide");

console.log(sonnetContent);


sonnetContent = sonnetContent.replace(/the /g, "a large ");

console.log(sonnetContent);

function updateSonnet() {
  sonnetElement.innerHTML = sonnetContent;
	sonnetElement.style.color = "red";
	sonnetElement.style.background = "green";
}

sonnetElement.addEventListener("click", updateSonnet);

