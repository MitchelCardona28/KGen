import { passwordGenerator } from '../generators/passGen'
import { LENGTH } from '../const/length'
import { checkboxInput, passwordContainerElement, labelElement } from './utils'

export const printPassword = () => {
  if (checkboxInput && passwordContainerElement) {
    const generatedPassword = passwordGenerator(LENGTH.MAX, (checkboxInput as HTMLInputElement).checked)
    const printedPassword = `<p>${generatedPassword}</p>`
    passwordContainerElement.innerHTML = printedPassword
  }
}

export const copyPassword = () => {
  if (passwordContainerElement) {
    const passwordText = passwordContainerElement.children[0].textContent || ""
    navigator.clipboard.writeText(passwordText)
  }
}

export const toggleLabelTextContent = () => {
  if (checkboxInput && labelElement) {
    const labelText: string = (checkboxInput as HTMLInputElement).checked ? 'Enable special characters' : 'Disable special characters'
    labelElement.textContent = `${labelText}`
  }
}
