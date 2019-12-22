import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Scroll({ children }) {
  return <C.Container>{children}</C.Container>
}
