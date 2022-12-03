function isDivisible(n, x, y) {
  var numberOne = n / x;
  var numberTwo = n / y;
  if (Math.floor(numberOne) === numberOne && Math.floor(numberTwo) === numberTwo) {
    return true;
  } else {
    return false;
  }
}
