import styled from 'styled-components/native'
import BG from '../../assets/BG.png'
import LOGO from '../../assets/Logo-min.png'
import { View } from 'react-native-animatable'
import { fonts, colors, metrics } from '../../styles'

const Container = styled.ImageBackground.attrs({
  source: BG,
})`
  flex: 1;
  background: ${colors.primary};
`
const Item = styled(View).attrs({
  animation: 'fadeInUp',
})`
  flex: 1;
  justify-content: center;
`
const Inciator = styled.View`
  flex: 1;
  justify-content: center;
`
const LogoContainer = styled(View).attrs({
  animation: 'fadeInDown',
})`
  position: absolute;
  top: 50%;
  margin-top: -${80 + 103}px;
  width: 100%;
  align-items: center;
`
const Logo = styled.Image.attrs({
  source: LOGO,
  resizeMode: 'contain',
})`
  width: 130px;
  height: 43px;
  box-shadow: 0 2px 4px #000;
`
const ImageContainer = styled.View`
  position: absolute;
  top: 50%;
  margin-top: -80px;
  width: 100%;
  align-items: center;
`
const Image = styled.Image`
  height: 160px;
`
const TextContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`
const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: ${fonts.bold};
  box-shadow: 0 2px 8px #000;
`
const Subtext = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-family: ${fonts.regular};
  text-align: center;
`
const ButtonCircle = styled.View`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
export {
  Container,
  Item,
  Inciator,
  LogoContainer,
  Logo,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Subtext,
  ButtonCircle,
}
