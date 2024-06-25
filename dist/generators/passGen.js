import { CHARS, SPECIALCHARS } from '../const/chars.js'
import random from './random.js'

export const passwordGenerator = (length, excludeSpecialChars) => {
  const passwordChars = excludeSpecialChars ? CHARS.replace(SPECIALCHARS, '') : CHARS

  const generatedPassword = Array.from(Array(length), () => {
    const randomIndex = random(CHARS.length)
    const randomChar = passwordChars.charAt(randomIndex)
    return randomChar
  }).join('')

  return generatedPassword
}
