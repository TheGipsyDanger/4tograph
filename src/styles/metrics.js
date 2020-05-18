import { Platform, Dimensions } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'
import { Header } from 'react-navigation-stack'
const { height, width } = Dimensions.get('window')

const spacing = (x = 1) => {
  return x * 8
}

export default {
  header: isIphoneX() ? Header.HEIGHT + getStatusBarHeight() : Header.HEIGHT,
  height: height,
  width: width,
  spacing: spacing,
}
