// Condiments Augment
var SandwichMaker = (function(maker) {
  var condimentsPrices = {
    "catsup": 1.90,
    "mustard": 1.40,
    "mayo": 1.00,
    "fluff": 3.00
  };

  maker.addCondiments = function(choice) {
    SandwichMaker.addTopping(condimentsPrices[choice])
    return condimentsPrices[choice];
  };
  return maker;
})(SandwichMaker);
