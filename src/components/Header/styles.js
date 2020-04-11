import styled from 'styled-components/native'
import { metrics, fonts, colors } from '../../styles'

const Container = styled.View`
  background: white;
  justify-content: center;
  align-items: center;
  height: ${metrics.header}px;
`
const Text = styled.Text`
  margin-top: 16px;
  font-size: 18px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  text-transform: capitalize;
`

export { Container, Text }
