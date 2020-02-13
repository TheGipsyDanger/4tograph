import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { fonts, colors, metrics } from '../../styles'

const ContainerOne = styled(LinearGradient).attrs({
  colors: ['#FFD69A', '#F89300'],
  start: { x: 0, y: 0.1 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  height: ${metrics.spacing(4)};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #f89300;
`
const TitleOne = styled.Text`
  font-size: 16px;
  color: #9b5c00;
  font-family: ${fonts.bold};
  text-transform: uppercase;
`
const ContainerTwo = styled(LinearGradient).attrs({
  colors: ['#E1ECEF', '#7F888A'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-width: ${0.5}px;
  border-color: ${colors.darkGrey};
`
const TitleTwo = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.bold};
  text-transform: uppercase;
`
export { ContainerOne, TitleOne, ContainerTwo, TitleTwo }
