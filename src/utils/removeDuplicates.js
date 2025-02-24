export function removeDuplicates(arr) {
  const clearArray = arr
    .toLowerCase()
    .replace(/[,\s]+/g, ' ')
    .split(' ')

  if (clearArray.length === 0) {
    return 'Array is empty'
  }

  const newArray = []

  for (let i = 0; i < clearArray.length; i++) {
    if (!newArray.includes(clearArray[i])) {
      newArray.push(clearArray[i])
    }
  }

  const finalResult = newArray.join(' ')

  return finalResult
}
