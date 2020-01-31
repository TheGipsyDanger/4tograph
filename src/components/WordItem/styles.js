import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { metrics, fonts } from '../../styles'

const Container = styled(LinearGradient).attrs({
  colors: ['#F1F1F1', '#D8D8D8'],
  start: { x: 0, y: 0.1 },
  end: { x: 0, y: 1 },
})`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  border-width: 2px;
  border-color: #979797;
  border-radius: 1px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
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
