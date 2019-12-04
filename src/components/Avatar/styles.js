import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
`
const Avatar = styled.Image.attrs(props => ({
  source: {
    uri: props.url
  }
}))`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
`

export { Container, Avatar }
