import React from 'react'
import { View, Text } from 'react-native'
import { Container, TextView } from './styles'
import PropTypes from 'prop-types'

const Button = ({ title, press, confirm }) => {
  return (
    <Container confirm={confirm} onPress={() => press()}>
      <TextView confirm={confirm}>{title}</TextView>
    </Container>
  )
}

Button.defaultProps = {
  title: '',
  confirm: false,
  press: () => {}
}

Button.propTypes = {
  title: PropTypes.string.isRequired
}

export default Button
