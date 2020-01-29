import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function WordItem({ currentWord: { word, type } }) {
  function defineScore(type) {
    switch (type) {
      case 'hard':
        return '+5'
        break
      case 'ok':
        return '+3'
        break
      default:
        return '+1'
        break
    }
  }

  return (
    <C.Container>
      <C.WordContent>
        <C.Text>{word}</C.Text>
      </C.WordContent>
      <C.TypeAndValueContent>
        <C.TypeAndValue>{type}</C.TypeAndValue>
        <C.TypeAndValue>{defineScore(type)}</C.TypeAndValue>
      </C.TypeAndValueContent>
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
