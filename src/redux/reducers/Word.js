import axios from 'axios'

export const Types = {}

export const Actions = {}

const INITIAL_STATE = {
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

export default function Word(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
      break
  }
}
