
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

function gradeAssign (array) {
	for (i = 0; i < array.length; i++) {
		// define currently viewed array element
		var currentScore = array[i];
		// if/else to determine grade count
		if (currentScore > 90) {
			gradeA++;
		} else if (currentScore > 80) {
			gradeB++;
		} else if (currentScore > 70) {
			gradeC++;
		} else if (currentScore > 60) {
			gradeD++;
		} else {
			gradeF++;
		}
	}
}

// Refactor attempt with case switch
function gradeAssign2 (array) {
	for (i = 0; i < array.length; i++) {
		var currentScore = array[i];
		switch (true) {
			case (currentScore > 90):
				gradeA++;
				break;
			case (currentScore > 80 && currentScore <= 90):
				gradeB++;
				break;
			case (currentScore > 70 && currentScore <= 80):
				gradeC++;
				break;
			case (currentScore > 60 && currentScore <= 70):
				gradeD++;
				break;
			case (currentScore <= 60):
				gradeF++;
				break;
			default: 
				console.log("defaulted");
		}
	}
}
	
	// Print amount of each grade
	console.log("Amount of A's: " + gradeA);
	console.log("Amount of B's: " + gradeB);
	console.log("Amount of C's: " + gradeC);
	console.log("Amount of D's: " + gradeD);
	console.log("Amount of F's: " + gradeF);


gradeAssign2(scores);

// experimental prototype addition of the math min and max functions
Array.prototype.max = function() {
	return Math.max.apply(null, this);
}
Array.prototype.min = function() {
	return Math.min.apply(null, this);
}

// Print lowest and highest scores

console.log("Lowest grade: " + scores.min());
console.log("Highest grade: " + scores.max());