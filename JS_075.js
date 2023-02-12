function findOdd(A) {
  for (let i = 0; i <= A.length - 1; i++) {
    const arrNumbers = A.filter(el => el === A[i])
    if (arrNumbers.length % 2 !== 0) {
      return A[i]
    }
  }
}
