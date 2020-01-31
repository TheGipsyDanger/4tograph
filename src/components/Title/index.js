import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Title({ title }) {
  return <C.Title>{title}</C.Title>
}

Title.defaultProps = {}

Title.propTypes = {}
