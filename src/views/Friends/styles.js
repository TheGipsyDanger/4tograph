import styled from 'styled-components/native'
import { fonts } from '../../styles'

const Container = styled.View`
  flex: 1;
  background: #fff;
`

const Title = styled.Text`
  font-size: 18px;
  color: #034078;
  font-family: ${fonts.bold};
  margin: 24px 16px;
`

export { Container, Title }
