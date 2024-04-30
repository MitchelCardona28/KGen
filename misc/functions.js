import { passwordGenerator } from '../generators/passGen.js'

const passwordContainer = document.getElementById('passwordContainer')

export const printPassword = () => {
  const generatedPassword = passwordGenerator(16)
  const printedPassword = `<p>${generatedPassword}</p>`
  passwordContainer.innerHTML = printedPassword
}

export const copyPassword = () => {
  navigator.clipboard.writeText(passwordContainer.children[0].textContent)
}
