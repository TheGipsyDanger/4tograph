import styled from 'styled-components/native'
import { fonts, colors } from '../../styles'

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 55px;
  background: ${props => (props.confirm ? colors.confirm : colors.white)};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`
const Text = styled.Text`
  font-family: ${props => (props.confirm ? fonts.bold : fonts.regular)};
  font-size: 22px;
  color: ${props => (props.confirm ? colors.white : colors.grey)};
  text-transform: uppercase;
`

export { Container, Text }
