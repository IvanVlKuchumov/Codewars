function reverseWords(str){
  let newStr = "";
  let word = ""
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] != " ") {
      word += str[i]
    } else {newStr += word.split("").reverse().join("");
    newStr += " ";
    word = "";}
  }
  newStr += word.split("").reverse().join("");
  return newStr; // reverse those words
}
