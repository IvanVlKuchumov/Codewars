function sumArray(array) {
  let sum = 0;
  if (array === null || !Array.isArray(array) || array.length === undefined || array.length === 1 || array.length === 2 || array.length === 0) {
    return 0;
  }
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for (let j = 1; j < array.length; j++) {
    if (min < array[j]) {
      min = array[j];  
    }}
  for (let k = 1; k < array.length; k++) {
    if (max > array[k]) {
      max = array[k];  
    }}  
  return sum - max - min;

}
