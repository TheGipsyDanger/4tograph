import styled from 'styled-components/native'
import { metrics } from '../../styles'

const Container = styled.View`
  flex: 1;
`
const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`
const PhotoContent = styled.TouchableOpacity.attrs({})`
  margin: 0 30px;
  margin-top: ${props => (props.top ? 88 : 24)}px;
  flex-direction: row;
  justify-content: space-between;
  height: ${metrics.width / 2 - 40};
`

const PhotoDisplay = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${metrics.width / 2 - 40};
  height: ${metrics.width / 2 - 40};
  background-color: red;
`

const ButtonContent = styled.View`
  margin: 0 30px;
  margin-top: 20px;
`

export { Container, Text, PhotoContent, PhotoDisplay, ButtonContent }
