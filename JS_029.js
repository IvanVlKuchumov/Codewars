const reverseSeq = n => {
  let array = [];
  for (var i = 1; i <= n; i++) {
    array.unshift(i);
  }
  return array;
};
