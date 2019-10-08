import styled from 'styled-components/native'
import { fonts } from '../../styles'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  /* align-items: center; */
  height: 64px;
  border-width: ${0.5}px;
  border-top-width: 0px;
  border-color: #cccccc;
`
export const AvatarContainer = styled.View`
  justify-content: center;
`
export const Avatar = styled.Image.attrs({})`
  background: #d8d8d8;
  height: 44px;
  width: 44px;
  margin: 0 10px;
  border-radius: 8px;
`
export const Name = styled.Text`
  color: #034078;
  font-size: 12px;
  font-family: ${fonts.bold};
`
export const Description = styled.Text`
  color: #828282;
  font-size: 11px;
  font-family: ${fonts.bold};
`
export const TextContainer = styled.View`
  flex: 1;
  margin-top: 5px;
  justify-content: center;
`
