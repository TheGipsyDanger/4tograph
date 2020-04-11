export const Types = {
  SET_USER_CHALLENGED: 'CreateGame/SET_USER_CHALLENGED',
  SET_WORD: 'CreateGame/SET_WORD',
}

export const Actions = {
  setUserChallenged: user => {
    return {
      type: Types.SET_USER_CHALLENGED,
      payload: user,
    }
  },
  setWord: word => {
    return {
      type: Types.SET_WORD,
      payload: word,
    }
  },
}

const INITIAL_STATE = {
  userChallenged: null,
  word: null,
}

export default function CreateGame(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER_CHALLENGED:
      return { ...state, userChallenged: action.payload }
    case Types.SET_WORD:
      return { ...state, word: action.payload }
    default:
      return state
      break
  }
}
