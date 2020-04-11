import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { FriendList } from '../../components'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const friends = [
  { name: 'Renan' },
  { name: 'Henrique' },
  { name: 'Pedro' },
  { name: 'Sônia' },
]

export default function MyFriendsGames() {
  return (
    <C.Container>
      <FriendList data={friends} title="My Friends" />
    </C.Container>
  )
}

MyFriendsGames.navigationOptions = {
  header: null,
}

MyFriendsGames.defaultProps = {
  myFriends: [],
}

MyFriendsGames.propTypes = {
  myFriends: PropTypes.array.isRequired,
}
