import styled from 'styled-components/native'
import { fonts, metrics, colors } from '../../styles'

const Container = styled.View`
  flex: 1;
  justify-content: center;
`

const Text = styled.Text`
  font-size: 26px;
  color: ${colors.white};
  text-align: center;
  font-family: ${fonts.regular};
`

const AvatarContainer = styled.View`
  flex-direction: row;
  width: ${metrics.width / 2}px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${metrics.spacing(2)}px;
`

const ButtonContainer = styled.View`
  margin: 0px ${metrics.spacing(4)}px;
  margin-top: ${metrics.spacing(4)}px;
`

const Content = styled.View`
  flex-direction: row;
  justify-content: center;
`

export { Container, Text, Content, ButtonContainer, AvatarContainer }
