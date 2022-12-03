function countSheeps(arrayOfSheep) {
  var numberOfSheeps = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      numberOfSheeps++;
    }
  }
  return numberOfSheeps;
}
