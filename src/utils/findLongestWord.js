export function findLongestWord(string) {
  const clearString = string
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, ' ')
    .split(' ')

  let longestWord = ''

  clearString.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })

  return longestWord
}
