import { generateBtn, copyBtn, checkboxInput } from '../../misc/utils.js'
import { printPassword, copyPassword, toggleLabelTextContent } from '../../misc/functions.js'

generateBtn.addEventListener('click', printPassword)
copyBtn.addEventListener('click', copyPassword)
checkboxInput.addEventListener('click', toggleLabelTextContent)
