var a = 5 / 7;
var b = 18 / 25;

var theBiggest = (function(a, b) {
  var result;
  a > b ? result = ["a", a] : result = ["b", b];
  // console.log(result);
  return result;
})(firstFraction, secondFraction)

var firstFraction = 7 /9;
var secondFraction = 13 /29;

console.log(theBiggest);
// console.log(theBiggest);
