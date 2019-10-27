import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
`
const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 88
  }
})`
  flex: 1;
  margin: 0px 20px;
`
const Separate = styled.View`
  margin-top: 20px;
`
export { Container, Content, Separate }
