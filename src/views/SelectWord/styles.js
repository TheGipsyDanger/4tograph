import styled from 'styled-components/native'
import ICON from '@expo/vector-icons/MaterialCommunityIcons'
import { metrics, fonts, colors } from '../../styles'

const Container = styled.View`
  flex: 1;
`
const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 88,
  },
})`
  flex: 1;
  padding: 0px ${metrics.spacing(3)}px;
`
const ResetButtonContent = styled.View`
  flex: 1;
  height: 100px;
  justify-content: center;
  align-items: center;
`
const ResetButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: ${colors.grey};
  border-radius: ${metrics.spacing(4)}px;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`

const Icon = styled(ICON).attrs({
  name: 'autorenew',
  size: 40,
  color: '#034078',
})`
  margin-top: 6px;
`

export { Container, Content, ResetButtonContent, ResetButton, Icon }
