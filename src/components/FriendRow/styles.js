import styled from 'styled-components/native'
import { fonts } from '../../styles'
import ICON from 'react-native-vector-icons/MaterialCommunityIcons'

const Container = styled.View`
  flex: 1;
  justify-content: center;
`

const Content = styled.View`
  flex-direction: row;
  margin-left: 16px;
`

const TextContent = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const Text = styled.Text`
  font-size: 14px;
  color: #034078;
  margin-left: 16px;
  font-family: ${fonts.bold};
  text-transform: capitalize;
`

const IconContainer = styled.TouchableOpacity``

const Icon = styled(ICON).attrs({
  name: 'dots-vertical',
  size: 30,
  color: '#ccc',
})``

export { Container, Text, Content, TextContent, IconContainer, Icon }
