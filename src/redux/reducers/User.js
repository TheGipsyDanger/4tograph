import axios from 'axios'

export const Types = {
  SET_USER: "user/SET_USER"
}

export const Actions = {
  setUser: data => {
    return {
      type: Types.SET_USER,
      payload: {
        data
      }
    }
  }
}

const INITIAL_STATE = {
  user: null,
  token: ""
}

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
      case Types.SET_USER:
        let { token, user } = action.payload.data        
        return { ...state, user, token: token.token }
    default:
      return state
      break
  }
}