import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background: #fff;
`

const Text = styled.Text`
  font-size: 18px;
  color: #f37321;
  font-weight: bold;
`

const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: 24, paddingLeft: 16 }
})``

const Separator = styled.View`
  height: 44px;
`

export { Container, Text, List, Separator }
