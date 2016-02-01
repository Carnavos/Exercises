// Cheese Augment
var SandwichMaker = (function(maker) {
  var cheesePrices = {
    "american": 0.40,
    "swiss": 0.50,
    "provolone": 0.60,
    "cheddar": 70.00
  };

  maker.addCheese = function(choice) {
    SandwichMaker.addTopping(cheesePrices[choice])
    return cheesePrices[choice];
  };
  return maker;
})(SandwichMaker);
