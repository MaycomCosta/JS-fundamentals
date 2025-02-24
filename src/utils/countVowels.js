export function countVowels(string) {
  const lowerString = string.toLowerCase()

  const vowels = lowerString.match(/[aeiou]/g)

  return vowels ? vowels.length : 0
}
