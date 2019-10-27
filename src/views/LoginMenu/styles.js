import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

const Container = styled(Animated.View)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
`
const Content = styled(Animated.View)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  background: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 10;
`
const Body = styled.View`
  height: ${height - 88}px;
  margin: 30px;
`
const Distribution = styled.View`
  margin-bottom: 20px;
`
const IconContainer = styled(Animated.View)`
  position: absolute;
  top: 44;
  left: 50%;
  z-index: 10;
  margin-left: -22px;
`
const IconButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 }
})``
const Icon = styled(ICON).attrs({
  size: 44,
  color: 'white',
  name: 'chevron-down'
})``
const Text = styled.Text`
  font-family: avenir;
  font-size: 18px;
  color: red;
  font-weight: bold;
`
export {
  Container,
  Content,
  Body,
  Distribution,
  IconContainer,
  IconButton,
  Icon,
  Text
}
