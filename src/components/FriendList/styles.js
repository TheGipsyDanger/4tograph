import styled from 'styled-components/native'
import { fonts, colors, metrics } from '../../styles'

const Container = styled.View`
  flex: 1;
`

const Title = styled.Text`
  font-size: 18px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  margin: ${metrics.spacing(3)}px ${metrics.spacing(2)}px;
`

const List = styled.FlatList.attrs({})``

const Separator = styled.View`
  height: ${metrics.spacing(6)}px;
  border-bottom-width: ${1 / 2}px;
  border-color: ${colors.grey};
`

export { Container, Title, List, Separator }
