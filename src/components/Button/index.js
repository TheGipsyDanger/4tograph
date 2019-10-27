import React from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

const Button = ({ title, press, confirm }) => {
  return (
    <C.Container confirm={confirm} onPress={() => press()}>
      <C.Text confirm={confirm}>{title}</C.Text>
    </C.Container>
  )
}

Button.defaultProps = {
  title: '',
  confirm: false,
  press: () => {}
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  confirm: PropTypes.bool.isRequired,
  press: PropTypes.func.isRequired
}

export default Button
