import styled from 'styled-components/native'
import ICON from '@expo/vector-icons/MaterialCommunityIcons'
import { metrics, colors } from '../../styles'

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${metrics.width / metrics.spacing()}px;
  height: ${metrics.width / metrics.spacing()}px;
  border-radius: ${metrics.width / metrics.spacing(2)}px;
  margin-bottom: ${metrics.spacing(2)};
  background: ${colors.white};
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: 32px;
  color: ${colors.white};
  font-weight: bold;
`

const Icon = styled(ICON).attrs(props => ({
  name: 'close',
  size: 30,
  color: colors.grey,
}))`
  margin-top: 4px;
`

export { Container, Text, Icon }
