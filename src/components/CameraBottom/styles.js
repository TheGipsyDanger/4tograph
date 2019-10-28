import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.25);
  flex-direction: row;
  padding-top: 4px;
  justify-content: space-around;
`
const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`
export { Container, Image }
