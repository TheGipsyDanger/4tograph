import React, { useState } from 'react'
import { Container, TextInput, TextView } from './styles'
import PropTypes from 'prop-types'

export default function Input({ placeholder, password, change, value }) {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
        onChangeText={text => change(text)}
      />
    </Container>
  )
}

Input.defaultProps = {
  password: false
}

Input.propTypes = {}
