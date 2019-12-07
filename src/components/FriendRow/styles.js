import styled from 'styled-components/native'
import { fonts } from '../../styles'

const Container = styled.View`
  flex: 1;
`

const Content = styled.View`
  flex-direction: row;
`

const TextContent = styled.View`
  justify-content: center;
`

const Text = styled.Text`
  font-size: 14px;
  color: #034078;
  margin-left: 16px;
  font-family: ${fonts.bold};
  text-transform: capitalize;
`

export { Container, Text, Content, TextContent }
