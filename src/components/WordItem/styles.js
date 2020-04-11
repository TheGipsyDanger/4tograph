import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { metrics, fonts, colors } from '../../styles'

const Content = styled(LinearGradient).attrs({
  colors: ['#F1F1F1', '#D8D8D8'],
  start: { x: 0, y: 0.1 },
  end: { x: 0, y: 1 },
})`
  width: 100%;
  padding: ${metrics.spacing(2)}px;
  border-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  border-color: #979797;
  border-radius: 1px;
  margin-bottom: ${metrics.spacing(2)}px;
  box-shadow: 0 2px 4px ${colors.opacity};
`

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``

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
  color: ${colors.primary};
  font-family: ${fonts.extraBold};
`

const Text = styled.Text`
  font-size: 24px;
  color: ${colors.primary};
  font-family: ${fonts.extraBold};
`

export {
  Container,
  Text,
  TypeAndValueContent,
  TypeAndValue,
  WordContent,
  Content,
}
