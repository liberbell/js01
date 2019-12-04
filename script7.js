var firstFraction = 7 /9;
var secondFraction = 13 /29;

var theBiggest = (function(a, b) {
  var result;
  a > b ? result = ["a", a] : result = ["b", b];
  // console.log(result);
  return result;
})(firstFraction, secondFraction)



console.log(theBiggest);
// console.log(theBiggest);
