function multiply() {
  var result = 3 * 4;
  console.log("3 multiplied by 4 is: ", result);
}
multiply();

var divided = function() {
  var result = 3 / 4;
  console.log("3 divided by 4 is: ", result);
}
divided();

(function() {
  var result = 12 / 0.75;
  console.log("12 devided by 0.75 is: ", result);
}())
