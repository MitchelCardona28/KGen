import { passwordGenerator } from '../generators/passGen.js'
import { MAXLENGTH } from '../const/length.js'

const passwordContainer = document.getElementById('password-container')

const checkboxInput = document.getElementById('checkbox')

export const printPassword = () => {
  const generatedPassword = passwordGenerator(MAXLENGTH, checkboxInput.checked)
  const printedPassword = `<p>${generatedPassword}</p>`
  passwordContainer.innerHTML = printedPassword
}

export const copyPassword = () => {
  navigator.clipboard.writeText(passwordContainer.children[0].textContent)
}
