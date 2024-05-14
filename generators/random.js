import { MIN } from '../const/length.js'

const random = (max) => {
  return Math.floor((Math.random() * max) + MIN)
}

export default random
