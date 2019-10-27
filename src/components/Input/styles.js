import styled from 'styled-components/native'
import { fonts } from '../../styles'

const Container = styled.View``
const TextInput = styled.TextInput.attrs(props => ({
  placeholder: props.placeholder,
  placeholderTextColor: '#eeeeee',
  autoCapitalize: 'none',
  autoCorrect: false
}))`
  border-radius: 5px;
  height: 55px;
  border-width: 3px;
  border-color: #eeeeee;
  color: #ccc;
  font-size: 22px;
  font-family: ${fonts.bold};
  text-align: center;
`
export { Container, TextInput }
