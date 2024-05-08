import { passwordGenerator } from '../generators/passGen.js'
import { MAX } from '../const/length.js'

const passwordContainer = document.getElementById('password-container')

export const printPassword = () => {
  const generatedPassword = passwordGenerator(MAX)
  const printedPassword = `<p>${generatedPassword}</p>`
  passwordContainer.innerHTML = printedPassword
}

export const copyPassword = () => {
  navigator.clipboard.writeText(passwordContainer.children[0].textContent)
}
