import styled from 'styled-components/native'
import { fonts } from '../../styles'

const Container = styled.View`
  flex: 1;
`

const Title = styled.Text`
  font-size: 18px;
  color: #034078;
  font-family: ${fonts.bold};
  margin: 24px 16px;
`

const List = styled.FlatList.attrs({})``

const Separator = styled.View`
  height: 44px;
  border-bottom-width: ${1 / 2}px;
  border-color: #cccccc;
`

export { Container, Title, List, Separator }
