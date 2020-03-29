export const Types = {
  IS_LOADING: 'loading/IS_LOADING',
}

export const Actions = {
  setIsLoading: status => {
    return {
      type: Types.IS_LOADING,
      payload: status,
    }
  },
}

const INITIAL_STATE = {
  is_loading: false,
}

export default function Loading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.IS_LOADING:
      return { ...state, is_loading: action.payload }
    default:
      return state
      break
  }
}
