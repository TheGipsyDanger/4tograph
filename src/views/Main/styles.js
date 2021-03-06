import styled from 'styled-components/native'
import { metrics } from '../../styles'

const Container = styled.View`
  flex: 1;
`
const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 88,
  },
})`
  flex: 1;
  padding: 0px ${metrics.spacing(2)}px;
`

const Separate = styled.View`
  margin-top: ${metrics.spacing(3)}px;
`
export { Container, Content, Separate }
