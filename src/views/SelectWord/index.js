import React, { useState, useEffect } from 'react'
import * as C from './styles'
import actions, { Word, CreateGame } from '../../redux/actions'
import { Bg, WordItem } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function SelectWord({ navigation }) {
  const dispatch = useDispatch()
  const words = useSelector(state => state.Word.words)

  useEffect(() => {
    getWords()
    return () => {}
  }, [])

  function getWords() {
    dispatch(Word.getWordsRequest())
  }

  function setWordAndNavigate(currentWord) {
    dispatch(CreateGame.setWord(currentWord))
    navigation.navigate('MyFriendsGame')
  }

  return (
    <Bg>
      <C.Container>
        <C.Content>
          {words.map((currentWord, index) => (
            <WordItem
              key={index}
              currentWord={currentWord}
              press={setWordAndNavigate}
            />
          ))}
          <C.ResetButtonContent>
            <C.ResetButton onPress={getWords}>
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
  words: [],
}

SelectWord.propTypes = {
  words: PropTypes.array,
}
