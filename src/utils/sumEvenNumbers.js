export function sumEvenNumbers(array) {
  const newArray = array.split(' ').map(Number)

  let sum = 0
  newArray.forEach((num) => {
    if (num % 2 === 0) {
      sum += num
    }
  })
  return sum
}
