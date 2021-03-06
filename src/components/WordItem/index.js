import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function WordItem({
  currentWord,
  currentWord: { word, type },
  press,
}) {
  function defineScore(type) {
    switch (type) {
      case 'Hard':
        return '+5'
        break
      case 'Ok':
        return '+3'
        break
      default:
        return '+1'
        break
    }
  }

  return (
    <C.Container onPress={() => press(currentWord)}>
      <C.Content>
        <C.WordContent>
          <C.Text>{word}</C.Text>
        </C.WordContent>
        <C.TypeAndValueContent>
          <C.TypeAndValue value={false}>{type}</C.TypeAndValue>
          <C.TypeAndValue value={true}>{defineScore(type)}</C.TypeAndValue>
        </C.TypeAndValueContent>
      </C.Content>
    </C.Container>
  )
}

WordItem.defaultProps = {
  word: '',
  type: '',
  press: () => {},
}

WordItem.propTypes = {
  word: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  press: PropTypes.func.isRequired,
}
