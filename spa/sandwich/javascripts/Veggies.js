// Veggies Augment
var SandwichMaker = (function(maker) {
  var veggiesPrices = {
    "lettuce": 0.20,
    "peppers": 0.50,
    "olives": 0.70,
    "spinach": 0.60
  };

  maker.addVeggies = function(choice) {
    SandwichMaker.addTopping(veggiesPrices[choice])
    return veggiesPrices[choice];
  };
  return maker;
})(SandwichMaker);
