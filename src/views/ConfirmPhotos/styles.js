import styled from 'styled-components/native'
import { metrics, colors } from '../../styles'

const Container = styled.View`
  flex: 1;
`
const Text = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
`
const PhotoContent = styled.TouchableOpacity.attrs({})`
  margin: 0 ${metrics.spacing(4)}px;
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
  /* background-color: red; */
`

const Photo = styled.Image.attrs(props => ({
  resizeMode: 'cover',
  source: {
    uri:
      props.photo != ''
        ? props.photo
        : 'https://cdn4.iconfinder.com/data/icons/icons-for-lifestyle/154/smile-512.png',
  },
}))`
  width: 100%;
  height: 100%;
`

const ButtonContent = styled.View`
  margin: 0 ${metrics.spacing(4)}px;
  margin-top: ${metrics.spacing(3)}px;
`

export { Container, Text, PhotoContent, PhotoDisplay, ButtonContent, Photo }
