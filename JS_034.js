function getAverage(marks){
  var averge = 0;
  for (var i = 0; i < marks.length; i++) {
    averge += marks[i];
  }
  return Math.floor(averge / marks.length);
}
