import styled from 'styled-components/native'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'
import { Camera } from 'expo-camera'

const Container = styled.View`
  flex: 1;
`
const Content = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`
const Text = styled.Text`
  font-size: 60px;
  color: #fff;
  font-weight: bold;
`
const CustomCamera = styled(Camera).attrs(props => ({
  type: props.type,
  flashMode: props.flash
    ? Camera.Constants.FlashMode.torch
    : Camera.Constants.FlashMode.off,
}))`
  flex: 1;
`
const Top = styled.View`
  align-items: flex-end;
  /* margin-top: ${getStatusBarHeight()}px; */
  margin-right: 32px;
`
const Bottom = styled.View`
  height: ${(getBottomSpace() + 60) * 2.5}px;
`

export { Container, Content, Text, CustomCamera, Top, Bottom }
