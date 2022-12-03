function century(year) {
  var thisCentury = 0;
  if (year / 100 > 10) {
    thisCentury = year / 100;
    if (thisCentury > Math.floor(year / 100)) {
      thisCentury++
      thisCentury = Math.floor(thisCentury);}
    } else if (year / 10 > 10) {
      thisCentury = year / 10;
if (thisCentury > Math.floor(year / 10)) {
      thisCentury++
      thisCentury = Math.floor(thisCentury);
    } }
else {
      thisCentury = 1;
    }
    return thisCentury;
    }
