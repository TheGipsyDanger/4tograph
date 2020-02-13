import styled from 'styled-components/native'
import { fonts, colors, metrics } from '../../styles'

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex: 1;
  flex-direction: row;
  height: ${metrics.spacing(8)};
  border-width: ${0.5}px;
  border-top-width: 0px;
  border-color: #cccccc;
`
const AvatarContainer = styled.View`
  justify-content: center;
`
const Avatar = styled.Image.attrs({})`
  background: ${colors.grey};
  height: ${metrics.spacing(5)};
  width: ${metrics.spacing(5)};
  margin: 0 ${metrics.spacing()}px;
  border-radius: ${metrics.spacing()};
`
const Name = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
`
const Description = styled.Text`
  font-size: 11px;
  color: ${colors.darkGrey};
  font-family: ${fonts.bold};
`
const TextContainer = styled.View`
  flex: 1;
  margin-top: ${metrics.spacing()};
  justify-content: center;
`

export { Container, AvatarContainer, Avatar, Name, Description, TextContainer }
