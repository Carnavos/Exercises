// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Basic numbers sort function that supplements the normal "sort" array method ensuring true chronological sequence
function basicSort (first, second) {
	return first - second;
};
// function to call in the "filter" method to gate logging integers beyond 19
function filter1 (value) {
	return value <= 19;
}
// function to multiply by 1.5 and subtract 1
function math1 (value) {
	return (value * 1.5) - 1;
}

// Key notes: using filter which uses conditions to only return certain values, then map to pass all array values through the math modification
console.log("integers: ", integers.sort(basicSort).reverse().filter(filter1).map(math1));