import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Header({ title }) {
  return (
    <C.Container>
      <C.Text>{title}</C.Text>
    </C.Container>
  )
}

Header.defaultProps = {}

Header.propTypes = {}
