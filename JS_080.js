/*You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.*/
function longestConsec(strarr, k) {
  let str = ''
  if (strarr.length === 0 || strarr.length < k || k <= 0) {
    return str
  }
  
  function createStr (index) {
    let newStr = ''
    for (let i = index; i < k + index; i++) {
        newStr += strarr[i]
    }
    return newStr
  }
  
  createStr (0)
  
  for (let j = 0; j <= strarr.length - k; j++) {
    if (createStr(j).length > str.length) {
      str = createStr(j)
    }
  }
  return str
}
