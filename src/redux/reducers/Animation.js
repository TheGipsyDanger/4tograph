import axios from 'axios'

export const Types = {
  TOGGLE_LOGIN_MODAL: 'animation/TOGGLE_LOGIN_MODAL'
}

export const Actions = {
  toggleLoginModal: () => {
    return {
      type: Types.TOGGLE_LOGIN_MODAL
    }
  }
}

export const Creators = {}

const INITIAL_STATE = {
  showLoginModal: false
}

export default function Animation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_LOGIN_MODAL:
      return { ...state, showLoginModal: !state.showLoginModal }
    default:
      return state
      break
  }
}
