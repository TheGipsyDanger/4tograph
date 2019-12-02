import styled from 'styled-components/native'
import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'

const Container = styled.View`
  flex: 1;
`
const CameraButtonContainer = styled.View`
  /* position: absolute;
  left: 50%;
  margin-left: -32px;
  width: 64px;
  background: red;
  border-radius: 32px; */
  /* flex: 1; */
  height: 64px;
  justify-content: center;
  align-items: center;
  background: red;
`
const CameraButton = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  margin-top: 32px;
  background: white;
  border-radius: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`
const FirstLine = styled.View`
  flex: 1;
  background: red;
  flex-direction: row;
`
const SecondLine = styled.View`
  flex: 1;
  background: white;
  /* background: rgba(0, 0, 0, 0.45); */
  flex-direction: row;
  padding-top: 4px;
  justify-content: space-around;
`

const Test = styled.View`
  flex: 1;
  background: red;
  /* background: rgba(0, 0, 0, 0.45); */
  flex-direction: row;
  padding-top: 4px;
  justify-content: space-around;
`

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex: 1;
  border-color: white;
  border-bottom-width: ${1 / 3}px;
  border-right-width: ${props => (props.first ? 1 / 3 : 0)}px;
`
const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`
export {
  Container,
  Image,
  Test,
  FirstLine,
  SecondLine,
  Button,
  CameraButtonContainer,
  CameraButton
}
