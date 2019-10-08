import styled from 'styled-components/native'
import { fonts } from '../../styles'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 44px;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  border-top-width: ${0.5}px;
  border-bottom-width: ${0.5}px;
  border-color: #cccccc;
`
export const Avatar = styled.Image`
  height: 36px;
  width: 36px;
  background: #ccc;
  border-radius: 18px;
  margin: 0 10px;
`

export const TextView = styled.Text`
  font-size: 14px;
  color: #034078;
  font-family: ${fonts.bold};
`
