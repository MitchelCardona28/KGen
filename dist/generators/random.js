import { LENGTH } from '../const/length.js'
const random = (max) => {
  return Math.floor((Math.random() * max) + LENGTH.MIN)
}
export default random
