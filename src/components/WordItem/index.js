import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function WordItem({ word, type }) {
  return (
    <C.Container>
      <C.Text>{word}</C.Text>
      <C.Text>{type}</C.Text>
    </C.Container>
  )
}

WordItem.defaultProps = {
  word: '',
  type: '',
}

WordItem.propTypes = {
  word: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
