/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*/
function spinWords(string){
  let arrWords = string.split(' ').map(w => {
    if (w.length > 4) {
           let newW = ''
           for (let i = w.length - 1; i >= 0; i--) {
                  newW += w[i]
            }
            return newW}
    else return w       
          } 
         )
  return arrWords.join(' ')
}
