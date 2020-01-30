import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { Bg, WordItem } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function SelectWord() {
  const dispatch = useDispatch()
  const words = useSelector(state => state.Word.words)

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    }
  }, [])

  return (
    <Bg>
      <C.Container>
        <C.Content>
          {words.map((currentWord, index) => (
            <WordItem key={index} currentWord={currentWord} />
          ))}
          <C.ResetButtonContent>
            <C.ResetButton>
              <C.Icon />
            </C.ResetButton>
          </C.ResetButtonContent>
        </C.Content>
      </C.Container>
    </Bg>
  )
}

SelectWord.navigationOptions = {
  header: null,
}

SelectWord.defaultProps = {
  words: [
    {
      id: 0,
      word: 'Barricada',
      type: 'Hard',
    },
    {
      id: 1,
      word: 'Horizonte',
      type: 'Ok',
    },
    {
      id: 2,
      word: 'Sucesso',
      type: 'Easy',
    },
  ],
}

SelectWord.propTypes = {
  words: PropTypes.array,
}
