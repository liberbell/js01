function giveMeEms(pixels) {
  var baseValue = 16;

  function doSomeMath() {
    return pixels/baseValue;
  }

  return doSomeMath;
}

var smallSize = giveMeEms(12); 
