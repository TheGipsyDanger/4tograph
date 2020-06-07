export const Types = {
  GET_WORDS_REQUEST: 'word/GET_WORDS_REQUEST',
  SET_WORDS: 'word/SET_WORDS',
}

export const Actions = {
  getWordsRequest: () => {
    return {
      type: Types.GET_WORDS_REQUEST,
    }
  },
  setWords: data => {
    return {
      type: Types.SET_WORDS,
      payload: data,
    }
  },
}

// const INITIAL_STATE = {
//   words: [

//   ],
// }

const INITIAL_STATE = {
  words: [
    {
      id: 46,
      type: 'hard',
      word: 'palavra 45',
    },
    {
      id: 68,
      type: 'ok',
      word: 'palavra 67',
    },
    {
      id: 84,
      type: 'easy',
      word: 'palavra 83',
    },
  ],
}

export default function Word(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_WORDS:
      return { ...state, words: action.payload }
    default:
      return state
      break
  }
}
