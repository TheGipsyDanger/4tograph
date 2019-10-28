import axios from 'axios'

export const Types = {
  SING_IN_REQUEST: 'loginRegister/SING_IN_REQUEST',
  SING_IN: 'loginRegister/SING_IN'
}

export const Actions = {
  signInRequest: (email, password) => {
    return {
      type: Types.SING_IN_REQUEST,
      payload: {
        email,
        password
      }
    }
  },
  signIn: user => {
    return {
      type: Types.SING_IN,
      payload: {
        user
      }
    }
  }
}

const INITIAL_STATE = {}

export default function LoginRegister(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SING_IN:
      return { ...state }
    default:
      return state
      break
  }
}
