export function findMissingNumber(input) {
  const numbsArray = input
    .replace(/[,\s]+/g, ' ') // Replaces commas and spaces with a single space
    .split(' ') // Splits the string into an array
    .map(Number) // Converts elements to numbers

  const maxNumber = Math.max(...numbsArray)

  const expectedSum = (maxNumber * (maxNumber + 1)) / 2
  const actualSum = numbsArray.reduce((sum, num) => sum + num, 0)

  return expectedSum - actualSum
}
