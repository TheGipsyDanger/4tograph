import styled from 'styled-components/native'
import { fonts, metrics, colors } from '../../styles'

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: ${metrics.spacing(5)};
  flex-direction: row;
  align-items: center;
  border-top-width: ${0.5}px;
  border-bottom-width: ${0.5}px;
  border-color: ${colors.grey};
`
const Avatar = styled.Image`
  height: ${metrics.spacing(5)};
  width: ${metrics.spacing(5)};
  background: ${colors.grey};
  border-radius: ${metrics.spacing(5) / 2};
  margin: 0 ${metrics.spacing()};
`
const Text = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
`

export { Container, Avatar, Text }
