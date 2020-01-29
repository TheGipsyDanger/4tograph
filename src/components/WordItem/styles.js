import styled from 'styled-components/native'
import { metrics } from '../../styles'

const Container = styled.View`
  /* flex: 1; */
  width: ${metrics.width};
  padding: 8px 0px;
  background: #f37321;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`
const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`

export { Container, Text }
