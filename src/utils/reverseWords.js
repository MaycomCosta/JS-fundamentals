export function reverseWords(string) {
  return string.trim().split(/\s+/).reverse().join(' ')
}
