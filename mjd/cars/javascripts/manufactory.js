'use strict';

function Car () {
  this.manufactured_date = Date.now();
};

function Make(maker) {
  this.manufacturer = maker;
};
// prototype chaining
Make.prototype = new Car();

function Model (model) {
  this.modelName = model;
};
// prototype chaining
Model.prototype = new Make();

let Toyota = new Make("Toyota");
let BMW = new Make("BMW");
let Chevrolet = new Make("Chevrolet");

let Matrix = new Model("Matrix");
let Z3 = new Model("Z3");
let Pinto = new Model("Pinto");

// Should all have the same properties
let car1 = new Matrix();
let car2 = new Matrix();
let car3 = new Matrix();

let car4 = new Z3();
let car5 = new Z3();

let car6 = new Pinto();

// Steve's Code

/*
  Create a function named Car with one 
  property named `manufactured_date`
 */
function Car () {
  this.manufactured_date = Date.now();
}
Car.prototype.changeManufacturedDate = function (newDate) {
  this.manufactured_date = newDate;
};

function Make (maker) {
  this.manufacturer = maker;
}
Make.prototype = new Car();


function Mini (name) {
  this.modelName = name;
}
Mini.prototype = new Make("BMW");


function Chevrolet (name) {
  this.modelName = name;
}
Chevrolet.prototype = new Make("GM");

function Camaro () {

}
Camaro.prototype = new Chevrolet("Camaro");

var Bumblebee = new Camaro();
console.log("Bumblebee",Bumblebee);







function Clubman (name) {
  this.name = name;
}
Clubman.prototype = new Mini("Clubman");

function Cooper (name) {
  this.name = name;
}
Cooper.prototype = new Mini("Cooper");

/*
  Create individual instances of Clubman
 */
var mine = new Clubman("Spike");
console.log("mine",mine);

var yours = new Cooper("Butch");
console.log("yours",yours);








/*
    Being an avid car collector, you own three 
    different cars all of same model from your 
    favorite manufacturer.

    Create three new objects for each of your 
    three favorite cars.
*/


/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/
