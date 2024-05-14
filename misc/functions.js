import { passwordGenerator } from '../generators/passGen.js'
import { MAXLENGTH } from '../const/length.js'
import { checkboxInput } from './utils.js'

const passwordContainerElement = document.getElementById('password-container')

const labelElement = document.querySelector('label')

export const printPassword = () => {
  const generatedPassword = passwordGenerator(MAXLENGTH, checkboxInput.checked)
  const printedPassword = `<p>${generatedPassword}</p>`
  passwordContainerElement.innerHTML = printedPassword
}

export const copyPassword = () => {
  const passwordText = passwordContainerElement.children[0].textContent
  navigator.clipboard.writeText(passwordText)
}

export const toggleLabelTextContent = () => {
  const labelText = checkboxInput.checked ? 'Enable special characters' : 'Disable special characters'
  labelElement.textContent = `${labelText}`
}
