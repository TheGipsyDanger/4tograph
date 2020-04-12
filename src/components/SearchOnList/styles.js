import styled from 'styled-components/native'
import ICON from '@expo/vector-icons/MaterialCommunityIcons'
import { metrics, colors, fonts } from '../../styles'

const Container = styled.View`
  height: 44px;
  margin: ${metrics.spacing(2)}px ${metrics.spacing(2)}px; 
  /* margin-bottom: ${metrics.spacing(4)}; */
`

const Row = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`

const IconContainer = styled.View`
  height: 44px;
  width: 30px;
  margin-left: ${metrics.spacing()}px;
  justify-content: flex-end;
  align-items: center;
`

const Icon = styled(ICON).attrs(props => ({
  name: 'account-search',
  size: 30,
  color: colors.primary,
}))``

const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: `#ccc`,
  autoCapitalize: 'none',
  autoCorrect: false,
}))`
  flex: 1;
  height: 44px;
  background: white;
  border-bottom-width: 1px;
  border-color: ${colors.primary};
  color: ${colors.primary};
  font-size: 14px;
  font-family: ${fonts.bold};
`

export { Container, Input, Row, IconContainer, Icon }
