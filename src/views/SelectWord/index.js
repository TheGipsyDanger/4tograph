import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { Bg, WordItem } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function SelectWord() {
  const dispatch = useDispatch()
  const example = useSelector(state => {})

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    }
  }, [])

  return (
    <Bg>
      <C.Container>
        <WordItem currentWord={} />
        <WordItem currentWord={} />
        <WordItem currentWord={} />
      </C.Container>
    </Bg>
  )
}

SelectWord.navigationOptions = {
  // header: null,
}

SelectWord.defaultProps = {
  words: [
    {
      id: 0,
      word: 'Text',
      type: 'Hard',
    },
    {
      id: 1,
      word: 'Text',
      type: 'Ok',
    },
    {
      id: 0,
      word: 'Text',
      type: 'Easy',
    },
  ],
}

SelectWord.propTypes = {
  words: PropTypes.array,
}
