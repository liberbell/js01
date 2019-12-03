function findBiggestFraction(a, b) {
  var result;
  a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  return result;
  // console.log("The function is running!");
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 7;


findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(7/16, 13/25);
findBiggestFraction(1/2, 3/4);

var fructionResult = findBiggestFraction(firstFraction, secondFraction);
console.log(fractionResult);
