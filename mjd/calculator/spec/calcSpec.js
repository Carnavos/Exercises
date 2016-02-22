// Write unit tests to check for the existence of the following functions:
// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()
// Write unit tests that will verify the expected output of each of those functions.

describe("The specifications for calculator functionality", function(){

	// Add method testing
	it("should have an add function", function(){
		expect(add).toBeDefined();
	});

	it("should add two integers", function(){
		expect(add(2, 5)).toBe(7);
	});

	// Subtract method testing
	it("should have a subtract function", function(){
		expect(subtract).toBeDefined();
	});

	it("should subtract two integers", function(){
		expect(subtract(7, 5)).toBe(2);
	});

	// Multiply testing
	it("should have an multiply function", function(){
		expect(multiply).toBeDefined();
	});

	it("should multiply two integers", function(){
		expect(multiply(5, 7)).toBe(35);
	});

	// Dividing testing
	it("should have a divide function", function(){
		expect(divide).toBeDefined();
	});

	it("Should divide two integers", function(){
		expect(divide(4, 2)).toBe(2);
	});

	// Square testing
	it("should have a square function", function(){
		expect(square).toBeDefined();
	});

	it("Should square an integer", function(){
		expect(square(4, 2)).toBe(16);
	});

	// Square Root testing
	it("should have a square root function", function(){
		expect(squareRoot).toBeDefined();
	});

	it("Should root an integer", function(){
		expect(squareRoot(4, 2)).toBe(2);
	});

});