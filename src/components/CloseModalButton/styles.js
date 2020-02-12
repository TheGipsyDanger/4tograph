import styled from 'styled-components/native'
import ICON from '@expo/vector-icons/MaterialCommunityIcons'
import { metrics } from '../../styles'

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${metrics.width / 8}px;
  height: ${metrics.width / 8}px;
  border-radius: ${metrics.width / 16}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  background: #fff;
`
const Text = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`
const Icon = styled(ICON).attrs(props => ({
  name: 'close',
  size: 30,
  color: '#ccc',
}))`
  margin-top: 4px;
`

export { Container, Text, Icon }
