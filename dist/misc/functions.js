import { passwordGenerator } from '../generators/passGen.js'
import { LENGTH } from '../const/length.js'
import { checkboxInput, passwordContainerElement, labelElement } from './utils.js'

export const printPassword = () => {
  if (checkboxInput && passwordContainerElement) {
    const generatedPassword = passwordGenerator(LENGTH.MAX, checkboxInput.checked)
    const printedPassword = `<p>${generatedPassword}</p>`
    passwordContainerElement.innerHTML = printedPassword
  }
}
export const copyPassword = () => {
  if (passwordContainerElement) {
    const passwordText = passwordContainerElement.children[0].textContent || ''
    navigator.clipboard.writeText(passwordText)
  }
}
export const toggleLabelTextContent = () => {
  if (checkboxInput && labelElement) {
    const labelText = checkboxInput.checked ? 'Enable special characters' : 'Disable special characters'
    labelElement.textContent = `${labelText}`
  }
}
