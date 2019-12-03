import styled from 'styled-components/native'
import { fonts } from '../../styles'

const Container = styled.View`
  flex: 1;
  justify-content: center;
`
const Text = styled.Text`
  font-size: 26px;
  color: #fff;
  text-align: center;
  font-family: ${fonts.regular};
`

export { Container, Text }
