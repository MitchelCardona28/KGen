import { passwordGenerator } from '../../generators/passGen.js'

const passwordContainer = document.getElementById('passwordContainer')
const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('copy')

const printPassword = () => {
  const passwordValue = passwordGenerator(16)
  const printedPassword = `<p>${passwordValue}</p>`
  passwordContainer.innerHTML = printedPassword
}

const copyPassword = () => {
  navigator.clipboard.writeText(copyBtn.textContent)
}

generateBtn.addEventListener('click', printPassword)
copyBtn.addEventListener('click', copyPassword)
