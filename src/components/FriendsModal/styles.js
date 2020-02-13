import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { metrics, colors } from '../../styles'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const Bg = styled(Animated.View)`
  height: ${metrics.height};
  width: ${metrics.width};
  background: ${colors.opacity}
  z-index: 5;
  position: absolute;
`
const Container = styled(Animated.View)`
  justify-content: flex-end;
  height: ${metrics.height};
  width: ${metrics.width};
  z-index: 10;
  position: absolute;
`
const Content = styled.View`
  background: ${colors.white};
  padding: ${metrics.spacing(2)}px;
  padding-bottom: ${getBottomSpace()}px;
`
const Button = styled.View`
  justify-content: center;
  align-items: center;
`
const Text = styled.Text`
  font-size: 18px;
  color: red;
  font-weight: bold;
`

export { Bg, Text, Container, Content, Button }
