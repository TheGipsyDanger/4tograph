import axios from 'axios'

export const Types = {
  SIGN_IN_REQUEST: 'loginRegister/SIGN_IN_REQUEST',
  SIGN_IN: 'loginRegister/SIGN_IN'
}

export const Actions = {
  signInRequest: (email, password) => {
    return {
      type: Types.SIGN_IN_REQUEST,
      payload: {
        email,
        password
      }
    }
  },
  signIn: user => {
    return {
      type: Types.SIGN_IN,
      payload: {
        user
      }
    }
  }
}

const INITIAL_STATE = {}

export default function LoginRegister(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN:
      return { ...state }
    default:
      return state
      break
  }
}
