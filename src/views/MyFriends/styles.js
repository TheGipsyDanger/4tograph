import styled from 'styled-components/native'
import { metrics, colors } from '../../styles'

const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`

const Text = styled.Text`
  font-size: 18px;
  color: #f37321;
  font-weight: bold;
`

const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: 24 },
})``

const Separator = styled.View`
  height: ${metrics.spacing(6)}px;
  border-bottom-width: ${1 / 2}px;
  border-color: ${colors.grey};
`

export { Container, Text, List, Separator }
