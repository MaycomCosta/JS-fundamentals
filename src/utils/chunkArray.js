export function chunkArray(array, size) {
  const arr = array.split(' ').map(Number)

  const result = []

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size) // Extracts a chunk

    result.push(chunk) // Adds it to the result array
  }

  console.log(result[0])

  return result
}
