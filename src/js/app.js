import { passwordGenerator } from '../../generators/passGen.js'

const passwordContainer = document.getElementById('passwordContainer')
const buttonGenerate = document.getElementById('generate')

const printPassword = () => {
  const passwordValue = passwordGenerator(16)
  const printedPassword = `<p>${passwordValue}</p>`
  passwordContainer.innerHTML = printedPassword
}

buttonGenerate.addEventListener('click', printPassword)
