export function findLargestNumber(ArrayNumbs) {
  const numbersArray = ArrayNumbs.split(' ').map(Number)

  if (numbersArray.length === 0) {
    return 'Array is empty'
  }

  let largest = -Infinity

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > largest) {
      largest = numbersArray[i]
    }
  }

  return largest
}
