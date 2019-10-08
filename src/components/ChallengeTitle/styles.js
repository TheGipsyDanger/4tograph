import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { fonts } from '../../styles'

export const ContainerOne = styled(LinearGradient).attrs({
  colors: ['#FFD69A', '#F89300'],
  start: { x: 0, y: 0.1 },
  end: { x: 0, y: 1 }
})`
  flex: 1;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #f89300;
`
export const TitleOne = styled.Text`
  font-size: 16px;
  /* color: #fff; */
  color: #9b5c00;
  font-family: ${fonts.bold};
  text-transform: uppercase;
`
export const ContainerTwo = styled(LinearGradient).attrs({
  colors: ['#E1ECEF', '#7F888A'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  flex: 1;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-width: ${0.5}px;
  border-color: #848c8e;
`
export const TitleTwo = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${fonts.bold};
  text-transform: uppercase;
`
