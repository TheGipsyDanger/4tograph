import { search } from '../../utils'

export const Types = {
  GET_MY_FRIENDS: 'friends/GET_MY_FRIENDS',
  SEARCH_MY_FRIENDS: 'friends/SEARCH_MY_FRIENDS',
  SET_MY_FRIENDS: 'friends/SET_MY_FRIENDS',
}

export const Actions = {
  setMyFriends: friends => {
    return {
      type: Types.SET_MY_FRIENDS,
      payload: friends,
    }
  },
  searchMyFriends: name => {
    return {
      type: Types.SEARCH_MY_FRIENDS,
      payload: name,
    }
  },
}

const INITIAL_STATE = {
  myFriends: [
    { name: 'Renan' },
    { name: 'Henrique' },
    { name: 'Pedro' },
    { name: 'Sônia' },
  ],
  otherFriends: [
    { name: 'Renan' },
    { name: 'Henrique' },
    { name: 'Pedro' },
    { name: 'Sônia' },
  ],
  searchTerm: '',
  searchMyFriends: [],
}

export default function Friends(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_MY_FRIENDS:
      return {
        ...state,
        searchTerm: action.payload,
        searchMyFriends: search.searchMyFriendsForName(
          action.payload,
          state.myFriends
        ),
      }
      return { ...state }
    default:
      return state
      break
  }
}
