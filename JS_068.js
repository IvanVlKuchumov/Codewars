/*Given a number n, return the number of positive odd numbers below n, EASY!*/
function oddCount(n){
     return n % 2 === 0 ? n / 2 : (n - 1)/2
}
