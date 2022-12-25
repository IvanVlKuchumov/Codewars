/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

const highAndLow = (numbers) => {
  const arrayNumbers = numbers.split(' ')
  const maxNumber = Math.max(...arrayNumbers)
  const minNumber = Math.min(...arrayNumbers)
  return `${maxNumber} ${minNumber}`
}
