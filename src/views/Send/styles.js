import styled from 'styled-components/native'
import SEND from '../../assets/send-min.png'
import { fonts, metrics, colors } from '../../styles'

const Container = styled.View`
  flex: 1;
`

const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
})`
  flex: 1;
`

const Text = styled.Text`
  margin-top: ${metrics.spacing(3)}px;
  font-size: 24px;
  color: #fff;
  font-family: ${fonts.extraBold};
  text-align: center;
  box-shadow: 0 2px 4px ${colors.opacity};
`
const ContainerImage = styled.View`
  align-items: center;
`
const Image = styled.Image.attrs({
  source: SEND,
  resizeMode: 'contain',
})`
  width: 150px;
  height: 150px;
  box-shadow: 0 2px 4px ${colors.opacity};
`

export { Container, Text, Image, Content, ContainerImage }
