function findBiggestFraction(a,b) {
  var result;
  a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  return result;
}
