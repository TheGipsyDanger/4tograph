import styled from 'styled-components/native'
import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'
import { Camera } from 'expo-camera'

const Container = styled.View`
  flex: 1;
`
const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`
const CustomCamera = styled(Camera).attrs({
  type: 'back'
})`
  flex: 1;
  justify-content: flex-end;
`
const Bottom = styled.View`
  height: ${getBottomSpace() + 56}px;
`

export { Container, Text, CustomCamera, Bottom }
