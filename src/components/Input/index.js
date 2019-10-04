import React from 'react'
import { Container, TextInput, TextView } from './styles'
import PropTypes from 'prop-types'

export default function Input({ placeholder, password }) {
  return (
    <Container>
      <TextInput placeholder={placeholder} secureTextEntry={password} />
    </Container>
  )
}

Input.defaultProps = {
  password: false
}

Input.propTypes = {}
