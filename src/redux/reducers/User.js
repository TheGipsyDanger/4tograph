import axios from 'axios'

export const Types = {
  SET_USER: 'user/SET_USER',
}

export const Actions = {
  setUser: user => {
    return {
      type: Types.SET_USER,
      payload: user,
    }
  },
}

const INITIAL_STATE = {
  user: null,
  token: '',
}

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
      break
  }
}
