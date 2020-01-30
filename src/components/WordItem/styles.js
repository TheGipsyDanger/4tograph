import styled from 'styled-components/native'
import { metrics, fonts } from '../../styles'

const Container = styled.View`
  width: 100%;
  padding: 16px;
  background: #d8d8d8;
  flex-direction: row;
  justify-content: space-between;
  border-width: 4px;
  border-color: #979797;
  border-radius: 1px;
  margin-bottom: 16px;
`
const WordContent = styled.View`
  justify-content: center;
  flex: 3;
`
const TypeAndValueContent = styled.View`
  flex: 1;
  justify-content: center;
`

const TypeAndValue = styled.Text`
  font-size: ${props => (props.value ? 14 : 18)}px;
  text-align: center;
  color: #034078;
  font-family: ${fonts.extraBold};
`

const Text = styled.Text`
  font-size: 24px;
  color: #034078;
  font-family: ${fonts.extraBold};
`

export { Container, Text, TypeAndValueContent, TypeAndValue, WordContent }
