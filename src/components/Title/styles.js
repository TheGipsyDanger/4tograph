import styled from 'styled-components/native'
import { fonts, colors, metrics } from '../../styles'

const Title = styled.Text`
  font-size: 18px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  margin: ${metrics.spacing(3)}px ${metrics.spacing(2)}px;
`

export { Title }
