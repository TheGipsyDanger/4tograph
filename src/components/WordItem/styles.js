import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { metrics, fonts, colors } from '../../styles'

const Content = styled.View`
  width: 100%;
  padding: ${metrics.spacing(2)}px;
  border-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  border-color: ${colors.primary};
  border-radius: 1px;
  background: white;
  margin-bottom: ${metrics.spacing(2)}px;
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
