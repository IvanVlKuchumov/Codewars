function fakeBin(x){
  let string = "";
  var number = 0;
  for (var i = 0; i < x.length; i++) {
   number = Number (x[i]); 
    if (number > 4) {
      string += "1";
    }
    else {
      string += "0";
    }
  }
  return  string;

}
