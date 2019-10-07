import { Dimensions, Animated } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import Logo from '../../assets/Logo-min.png'
const { width, height } = Dimensions.get('window')

export const Container = styled.View`
  height: ${height}px;
  justify-content: flex-end;
`
export const Scroll = styled.ScrollView.attrs({
  containerContentStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})`
  flex: 1;
`
export const Body = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -130px;
  margin-top: -90px;
`
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
  source: Logo
})`
  width: 260px;
  height: 180px;
`
export const ButtonContent = styled.View`
  margin: ${getBottomSpace()}px 30px;
  margin-top: 0;
`
export const Distribution = styled.View`
  margin-bottom: 20px;
`
