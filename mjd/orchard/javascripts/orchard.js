'use strict';

class Plant {
	// set up to receive when Tree is called (no individual calls on Plant)
	constructor (height) {
		this.height = height;
	}
	increaseHeight (growth) {
		this.height += growth;
		console.log("this.height: ", this.height);
	}
	decreaseHeight (cut) {
		this.height -= cut;
	}
}

// function Plant () {
// 	this.height = 0;
// }

class Tree extends Plant {
	// constructor is for Tree (initial class), super is for Plant (parent Class)
	constructor(height) {
		super(height);
		this.grown = 0;
		this.branches = 0;
	}
	// grow method
	grow (amount) {
		this.increaseHeight(amount);
		this.grown += amount;
		if (this.grown >= 10) {
			this.branches++;
			this.grown -= 10;
		}		
	}
	// trim method
	trim (amount) {
		this.decreaseHeight(amount);
		this.branches--;
		console.log("Trees Trimmed");		
	}
}

let PearTree = new Tree(40);
console.log("PearTree: ", PearTree);
// PearTree.height = 40;

let OakTree = new Tree(70);
// OakTree.height = 70;

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

