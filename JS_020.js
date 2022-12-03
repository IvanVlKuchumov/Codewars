function lovefunc(flower1, flower2){
  if ((flower1 / 2 === Math.floor(flower1 / 2) && flower2 / 2 != Math.floor(flower2 / 2)) || (flower2 / 2 === Math.floor(flower2 / 2) && flower1 / 2 != Math.floor(flower1 / 2))) {
    return true;
  }
  return false;
}
