import { LENGTH } from '../const/length'

const random = (max: number) => {
  return Math.floor((Math.random() * max) + LENGTH.MIN)
}

export default random
