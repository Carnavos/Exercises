'use strict';

function Plant () {
	this.height = 0;
}

function Tree () {
	this.grown = 0;
	this.branches = 0;
}

// setting up prototypical chain between Plant and Tree
Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function(growth) {
	this.height += growth;
	console.log("this.height: ", this.height);
};

Plant.prototype.decreaseHeight = function(cut) {
	this.height -= cut;
};

Tree.prototype.grow = function(amount) {
	this.increaseHeight(amount);
	this.grown += amount;
	if (this.grown >= 10) {
		this.branches++;
		this.grown -= 10;
	}
};

Tree.prototype.trim = function(amount) {
	this.decreaseHeight(amount);
	this.branches--;
	console.log("Trees Trimmed");
};

let PearTree = new Tree();
PearTree.height = 40;

let OakTree = new Tree();
OakTree.height = 70;

let counter = 0;

$(document).ready(() => {
	let container = $("#container");
	function populateDom () {
		let treeContent = '';
		treeContent += `<div>Pear Tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches</div>`;
		treeContent += `<div>Oak Tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches</div>`;
		$(container).append(treeContent);
	}

	// function to handle paired tree growth at different rates, with branch +1 increase every 10+ in height
	function growTrees () {
		// Grow by set intervals
		PearTree.grow(4);
		OakTree.grow(7);

		// Increment counter
		counter++;
		console.log("counter: ", counter);

		// Every 10th time, trim the tree
		if (counter % 10 === 0) {
			PearTree.trim(12);
			OakTree.trim(17);
		}
		// If counter at 30, stop the interval function (hopefully)
		if (counter === 30) {
			clearInterval(growTimer);
			console.log("Interval Function Stopped");
		}

		populateDom();
	}

	// runs callback (will be growTrees) every 2000 ms
	var growTimer = setInterval(growTrees, 1000);

});


let tedTree = new Tree(20);
console.log("initial ted's tree height: ", tedTree.height);
tedTree.grow(3);
console.log("ted's tree height: ", tedTree.height);
tedTree.grow(5);
console.log("ted's tree height: ", tedTree.height);
tedTree.trim(6);
console.log("ted's tree height: ", tedTree.height);
console.log("ted's tree branches: ", tedTree.branches);
console.log("ted's tree: ", tedTree);

