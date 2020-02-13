import styled from 'styled-components/native'
import { fonts, colors, metrics } from '../../styles'

const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`

const Title = styled.Text`
  font-size: 18px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  margin: ${metrics.spacing(3)}px ${metrics.spacing(2)}px;
`

export { Container, Title }
