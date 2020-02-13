import { Platform, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const spacing = (x = 1) => {
  return x * 8
}

export default {
  height: height,
  width: width,
  spacing: spacing,
}
