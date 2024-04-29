import CHARS from '../const/chars.js'
import random from './random.js'

export const passwordGenerator = (length) => {
  const generatedPassword = Array.from(Array(length), () => {
    const randomChars = CHARS.charAt(random(CHARS.length))
    return randomChars
  }).join('')

  return generatedPassword
}
