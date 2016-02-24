'use strict';

describe("", () => {

	// There should be a Plant function defined.
	it("should have a Plant function defined", () => {
		expect(Plant).toBeDefined();
	});

	// There should be a Tree function defined.
	it("should have a Tree function defined", () => {
		expect(Tree).toBeDefined();
	});

	// There should be a function named increaseHeight on the prototype of Plant.
	it("should be a function named increaseHeight on the prototype of Plant", () => {
		let testPlant = new Plant();
		expect(testPlant.increaseHeight).toBeDefined();
	});

	// There should be a function named decreaseHeight on the prototype of Plant.
	it("should be a function named decreaseHeight on the prototype of Plant", () => {
		let testPlant = new Plant();
		expect(testPlant.decreaseHeight).toBeDefined();
	});

	// There should be a height property on Plant.
	it("should be a height property on Plant", () => {
		let testPlant = new Plant(0);
		expect(testPlant.height).toBeDefined();
	});

	// There should be a function named grow on the prototype of Tree.
	it("should be a function named grow on the prototype of Tree", () => {
		let testTree = new Tree();
		expect(testTree.grow).toBeDefined();
	});

	// There should be a function named trim on the prototype of Tree.
	it("should be a function named trim on the prototype of Tree", () => {
		let testTree = new Tree();
		expect(testTree.trim).toBeDefined();
	});

	// When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
	it("When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument", () => {

		let PearTree = new Tree;
		PearTree.height = 4;
		PearTree.trim(2);

		expect(PearTree.height).toEqual(2);
	});

	// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
	it("When you invoke the trim method on Tree, the values of the branches property should be decreased by one", () => {

		let PearTree = new Tree;
		PearTree.branches = 6;
		PearTree.trim(2);

		expect(PearTree.branches).toEqual(5);
	});

	// When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
	it("When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument", () => {

		let PearTree = new Tree;
		PearTree.height = 3;
		PearTree.grow(4)

		expect(PearTree.height).toEqual(7);
	});



});
