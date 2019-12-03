import styled from 'styled-components/native'
import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'
import ICON from '@expo/vector-icons/MaterialIcons'

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`

const CameraButtonContainer = styled.View`
  height: 64px;
  justify-content: center;
  align-items: center;
  background: red;
`

const CameraButton = styled.View`
  height: 60px;
  width: 60px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`

const FirstLine = styled.View`
  height: 60px;
  flex-direction: row;
`

const SecondLine = styled.View`
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  flex-direction: row;
  padding-top: 4px;
  justify-content: space-around;
`

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* border-color: white;
  border-bottom-width: ${1 / 3}px;
  border-right-width: ${props => (props.first ? 1 / 3 : 0)}px; */
`
const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`

const Icon = styled(ICON).attrs(props => ({
  name: props.name,
  size: 30,
  color: 'white'
}))``

export {
  Container,
  Image,
  FirstLine,
  SecondLine,
  Button,
  CameraButtonContainer,
  CameraButton,
  Icon
}
