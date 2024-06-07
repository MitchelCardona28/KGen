import { passwordGenerator } from '../generators/passGen'
import { LENGTH } from '../const/length'
import { checkboxInput } from './utils'

const passwordContainerElement = document.getElementById('password-container')

const labelElement = document.querySelector('label')

export const printPassword = () => {
  const generatedPassword = passwordGenerator(LENGTH.MAXLENGTH, checkboxInput.checked)
  const printedPassword = `<p>${generatedPassword}</p>`
  passwordContainerElement.innerHTML = printedPassword
}

export const copyPassword = () => {
  const passwordText = passwordContainerElement.children[0].textContent
  navigator.clipboard.writeText(passwordText)
}

export const toggleLabelTextContent = () => {
  const labelText: string = checkboxInput.checked ? 'Enable special characters' : 'Disable special characters'
  labelElement.textContent = `${labelText}`
}
