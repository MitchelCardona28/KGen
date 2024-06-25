const LOWERCAPS: string = 'abcdefghijklmnñopqrstuvwxyz'
const UPPERCAPS: string = LOWERCAPS.toUpperCase()
const NUMBERS: string = '1234567890'
export const SPECIALCHARS: string = '!¡"\'#$%&/()=?¿@|*><,;.:-_{}[]+^~ '

export const CHARS: string = ''.concat(LOWERCAPS, UPPERCAPS, NUMBERS, SPECIALCHARS)
