import styled from 'styled-components/native'
import ICON from '@expo/vector-icons/MaterialIcons'
import { metrics, fonts, colors } from '../../styles'

const Container = styled.View`
  background: white;
  margin: 0px 8px;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${metrics.spacing(2)};
  flex-direction: row;
  height: ${metrics.header}px;
`

const IconContainer = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})`
  height: 26px;
  width: 26px;
`

const Icon = styled(ICON).attrs(props => ({
  name: props.type == 'back' ? 'arrow-back' : 'arrow-forward',
  size: 26,
  color: colors.primary,
}))``

const Text = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
`

export { Container, Icon, IconContainer, Text }
