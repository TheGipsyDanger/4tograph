import React from 'react'
import { ActivityIndicator } from 'react-native'
import { WaveIndicator } from 'react-native-indicators'
import * as C from './styles'
import PropTypes from 'prop-types'

const Button = ({ title, press, confirm, is_loading }) => {
  return (
    <C.Container confirm={confirm} onPress={() => press()}>
      {!is_loading ? (
        <C.Text confirm={confirm}>{title}</C.Text>
      ) : (
        <WaveIndicator color="white" size={30} />
      )}
    </C.Container>
  )
}

Button.defaultProps = {
  title: '',
  confirm: false,
  is_loading: false,
  press: () => {},
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  confirm: PropTypes.bool.isRequired,
  is_loading: PropTypes.bool.isRequired,
  press: PropTypes.func.isRequired,
}

export default Button
