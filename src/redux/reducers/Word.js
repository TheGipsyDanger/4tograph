import axios from 'axios'

export const Types = {}

export const Actions = {}

const INITIAL_STATE = {
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

export default function Word(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
      break
  }
}
