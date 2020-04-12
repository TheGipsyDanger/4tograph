import React, { useState, useEffect } from 'react'
import actions, { Friends as FriendsActions } from '../../redux/actions'
import { FriendList } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import * as C from './styles'

export default function MyFriendsGames() {
  const dispatch = useDispatch()
  const { searchMyFriends, myFriends, searchTerm } = useSelector(
    state => state.Friends
  )

  const currentList = searchTerm != '' ? searchMyFriends : myFriends

  return (
    <C.Container>
      <FriendList data={currentList} type={'StartGame'} title="My Friends" />
    </C.Container>
  )
}

MyFriendsGames.defaultProps = {
  myFriends: [],
}

MyFriendsGames.propTypes = {
  myFriends: PropTypes.array.isRequired,
}
