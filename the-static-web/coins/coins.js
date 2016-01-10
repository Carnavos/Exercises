/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var userAmount;

var container = document.getElementById("container");

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  // Declare/reset coin properties
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  userAmount = document.getElementById('coinInput').value;

  coinPurse.quarters = Math.floor(userAmount / .25);
  console.log(coinPurse.quarters);
  
  coinPurse.dimes = Math.floor((userAmount % .25) / .10);
  console.log(coinPurse.dimes);

  coinPurse.nickels = Math.floor(((userAmount % .25) % .10) / .05);
  console.log(coinPurse.nickels);

  coinPurse.pennies = Math.floor((((userAmount % .25) % .10) % .05) / .01);
  console.log(coinPurse.pennies);


  console.log('domPrint attempt');
  console.log(coinPurse);

  container.innerHTML = "<p> Quarters: " + coinPurse.quarters + "</p>"
   + "<p> Dimes: " + coinPurse.dimes + "</p>"
   + "<p> Nickels: " + coinPurse.nickels + "</p>"
   + "<p> Pennies: " + coinPurse.pennies + "</p>";
}

// Clearing function for reset button
function clearOut() {
  console.log("clear attempt");

  // Reset display
  document.getElementById("container").innerHTML = "";
}

// CoinPurse Object DOM Print function
function domPrint() {

  console.log('domPrint attempt');
  console.log(coins);

  container.innerHTML = "<p> Quarters: " + coins.quarters + "</p>";
}

// Define buttons
var convertButton = document.getElementById("convert");
var resetButton = document.getElementById("resetter");

// Add click eventListener to convert button
convertButton.addEventListener("click", coinCounter);
// convertButton.addEventListener("click", domPrint);
resetButton.addEventListener("click", clearOut);

