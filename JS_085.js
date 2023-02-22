/*Write a function that checks if a given string (case insensitive) is a palindrome.*/
function isPalindrome(x) {
  let y = ''
  const xL = x.toLowerCase()
  for (let i = xL.length - 1; i >= 0; i--) {
     y += xL[i] 
  }
  return  xL === y// your code here
}
