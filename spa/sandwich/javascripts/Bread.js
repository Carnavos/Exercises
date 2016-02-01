// Bread Augment
var SandwichMaker = (function(maker) {
  var breadPrices = {
    "wheat": 1.20,
    "white": 1.40,
    "wonder": 4.00,
    "artisan": 12.00
  };

  maker.addBread = function(choice) {
    // console.log("addBread init");
    // console.log("breadPrices[choice]: ", breadPrices[choice]);
    SandwichMaker.addTopping(breadPrices[choice])
    return breadPrices[choice];
  };
  return maker;
})(SandwichMaker);
