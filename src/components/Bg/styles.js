import styled from 'styled-components/native'
import BLUR from '../../assets/blur-min.png'

export const Container = styled.View`
  flex: 1;
  background: #034078;
`
export const Blur = styled.ImageBackground.attrs({
  source: BLUR,
  resizeMode: 'contain'
})`
  flex: 1;
`
