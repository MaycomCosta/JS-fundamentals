export function firstNonRepeatingChar(string) {
  const charCount = {}

  for (const char of string) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (const char of string) {
    if (charCount[char] === 1) {
      return char
    }
  }

  return null
}
