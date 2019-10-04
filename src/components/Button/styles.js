import styled from 'styled-components/native'
import { fonts } from '../../styles'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 55px;
  background: ${props => (props.confirm ? '#2A9D8F' : '#FFF')};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`
export const TextView = styled.Text`
  font-family: ${props => (props.confirm ? fonts.bold : fonts.regular)};
  font-size: 22px;
  color: ${props => (props.confirm ? '#fff' : '#6d7278')};
  text-transform: uppercase;
`
