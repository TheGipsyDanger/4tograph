import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

export const Container = styled(Animated.View)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
`
export const Content = styled(Animated.View)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  background: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 10;
`
export const Body = styled.View`
  height: ${height - 88}px;
  margin: 30px;
`
export const Distribution = styled.View`
  margin-bottom: 20px;
`
export const IconContainer = styled(Animated.View)`
  position: absolute;
  top: 44;
  left: 50%;
  z-index: 10;
  margin-left: -22px;
`
export const IconButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 }
})``
export const Icon = styled(ICON).attrs({
  size: 44,
  color: 'white',
  name: 'chevron-down'
})``
export const TextView = styled.Text`
  font-family: avenir;
  font-size: 18px;
  color: red;
  font-weight: bold;
`
