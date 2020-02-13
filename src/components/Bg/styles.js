import styled from 'styled-components/native'
import BLUR from '../../assets/blur-min.png'
import { colors } from '../../styles'

const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
`
const Blur = styled.ImageBackground.attrs({
  source: BLUR,
  resizeMode: 'contain',
})`
  flex: 1;
`
export { Container, Blur }
