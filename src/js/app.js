import { generateBtn, copyBtn } from '../../misc/buttons.js'
import { printPassword, copyPassword } from '../../misc/functions.js'

generateBtn.addEventListener('click', printPassword)
copyBtn.addEventListener('click', copyPassword)
