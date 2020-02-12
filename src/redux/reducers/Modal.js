export const Types = {
  SHOW_FRIENDS_MODAL_TYPE_1: 'modal/SHOW_FRIENDS_MODAL_TYPE_1',
}

export const Actions = {
  showFriendsModalType1: () => {
    return {
      type: Types.SHOW_FRIENDS_MODAL_TYPE_1,
    }
  },
}

const INITIAL_STATE = {
  type: 'default',
  show: false,
}

export default function Modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_FRIENDS_MODAL_TYPE_1:
      return { ...state, type: 'friends1', show: true }
    default:
      return state
      break
  }
}
