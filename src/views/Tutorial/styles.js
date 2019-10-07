import styled from 'styled-components/native'
import BG from '../../assets/BG.png'
import LOGO from '../../assets/Logo.png'
import { fonts } from '../../styles'

export const Container = styled.ImageBackground.attrs({
  source: BG
})`
  flex: 1;
  background: #034078;
`
export const Item = styled.View`
  flex: 1;
  justify-content: center;
`
export const LogoContainer = styled.View`
  position: absolute;
  top: 50%;
  margin-top: -${80 + 103}px;
  width: 100%;
  align-items: center;
`
export const Logo = styled.Image.attrs({
  source: LOGO
})`
  width: 130px;
  height: 43px;
  box-shadow: 0 2px 4px #000;
`
export const ImageContainer = styled.View`
  position: absolute;
  top: 50%;
  margin-top: -80px;
  width: 100%;
  align-items: center;
`
export const Image = styled.Image`
  height: 160px;
`
export const TextContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`
export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: ${fonts.bold};
  box-shadow: 0 2px 4px #000;
`
export const Subtext = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-family: ${fonts.regular};
  text-align: center;
`
export const ButtonCircle = styled.View`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
