function abbrevName(name){

  var abbrev = "";
  abbrev += name[0].toUpperCase();
  for (var i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      abbrev += ".";
      abbrev += name[i+1].toUpperCase();
    }
  }
  return abbrev
}
