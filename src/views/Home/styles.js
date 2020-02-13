import styled from 'styled-components/native'
import Logo from '../../assets/Logo-min.png'
import { metrics, colors } from '../../styles'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const Container = styled.View`
  height: ${metrics.height}px;
  justify-content: flex-end;
`
const Scroll = styled.ScrollView.attrs({
  containerContentStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})`
  flex: 1;
`
const Body = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -130px;
  margin-top: -90px;
`
const Image = styled.Image.attrs({
  resizeMode: 'contain',
  source: Logo,
})`
  width: 260px;
  height: 180px;
`
const ButtonContent = styled.View`
  margin-top: 0;
`
const Distribution = styled.View`
  margin: ${getBottomSpace()}px 30px;
  margin-bottom: 20px;
`

export { Container, Scroll, Body, Image, ButtonContent, Distribution }
