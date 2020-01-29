import styled from 'styled-components/native'
import { metrics, fonts } from '../../styles'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const Content = styled.View`
  width: ${metrics.width};
  padding: 0px 40px;
`

export { Container, Content }
