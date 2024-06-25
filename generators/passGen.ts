import { CHARS, SPECIALCHARS } from '../const/chars'
import random from './random'

export const passwordGenerator = (length: number, excludeSpecialChars: boolean) => {
  const passwordChars = excludeSpecialChars ? CHARS.replace(SPECIALCHARS, '') : CHARS

  const generatedPassword = Array.from(Array(length), () => {
    const randomIndex = random(CHARS.length)
    const randomChar = passwordChars.charAt(randomIndex)
    return randomChar
  }).join('')

  return generatedPassword
}
