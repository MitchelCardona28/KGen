import { passwordGenerator } from '../../generators/passGen.js'

const passwordContainer = document.getElementById('passwordContainer')
// const passwordValue = document.getElementById('passwordValue')
const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('copy')

const printPassword = () => {
  const generatedPassword = passwordGenerator(16)
  const printedPassword = `<p>${generatedPassword}</p>`
  passwordContainer.innerHTML = printedPassword
}

const copyPassword = () => {
  navigator.clipboard.writeText(passwordContainer.children[0].textContent)
}

generateBtn.addEventListener('click', printPassword)
copyBtn.addEventListener('click', copyPassword)
