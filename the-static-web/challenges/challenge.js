// Challenge #1

for (i = 1;; i++) {
	if (i % 1 === 0 && i % 2 === 0 && i % 3 === 0 && i % 4 === 0 && i % 5 === 0 && i % 6 === 0 && i % 7 === 0 && i % 8 === 0 && i % 9 === 0 && i % 10 === 0) {
		console.log("The smallest number to be divisible by all numbers 1-10 without remainder is " + i);
		break;
	}
}

// Fibonacci Sequence Generator

var fibs = [0];

// infinite loop
for (i = 0;; i++) {
	var j = i - 1;

	// adding the two most current items in fibs array together
	var newFib = fibs[i] + fibs[j];

	console.log(fibs);
	if (i <= 1) {
		// pushing first two 1's in the sequence
		fibs.push(1);
	} else if (newFib < 500) {

		// push combination variable newFib unless over 500
		fibs.push(newFib);
		console.log(newFib);
	} else {
		console.log("end of loops");
		// break infinite loop
		break;
	}
}

// display sequence
console.log(fibs)



// Challenge #3


// Variable declaration
var squaredi;
var squaredSum = 0;
var summedSquare = 0;
var snowball = 0;

// Loop for part one; square each loop number then add it to the sum value.
for (i = 1; i <= 10; i++) {
	squaredi = i * i;
	console.log(squaredi);
	squaredSum += squaredi;
}

// Loop for part two; sum each loop counter and finalize by squaring it (outside loop)
for (i = 1; i <= 10; i++) {
	snowball += i;
}

console.log(snowball);
summedSquare = snowball * snowball;

// Log results
console.log("Sum of the squares of the first ten natural numbers: " + squaredSum);
console.log("Square of the sum of the first ten natural numbers: " + summedSquare);
console.log("The difference between these is: " + (summedSquare - squaredSum));

// Challenge #1
// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

// Challenge #2
// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500.

// Challenge #3
// What is the difference between the sum of the squares of the first ten natural numbers,
 // and the square of the sum of the first ten natural numbers? 