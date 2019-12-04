var a = 5 / 7;
var b = 18 / 25;

var theBiggest = (function(a, b) {
  var result;
  a > b ? result = ["a", a] : result = ["b", b];
  // console.log(result);
  return result;
})(101, 20)

console.log(theBiggest());
// console.log(theBiggest);
