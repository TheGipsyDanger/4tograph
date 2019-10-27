import React, { useState } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Input({ placeholder, password, change, value }) {
  return (
    <C.Container>
      <C.TextInput
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
        onChangeText={text => change(text)}
      />
    </C.Container>
  )
}

Input.defaultProps = {
  password: false
}

Input.propTypes = {
  password: PropTypes.bool.isRequired
}
