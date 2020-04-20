import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import actions, { Modal, Friends as FriendsActions } from '../../redux/actions'
import ModalContext from '../../utils/ModalContext'
import FriendRow from '../FriendRow'
import SearchOnList from '../SearchOnList'
import PropTypes from 'prop-types'
import * as C from './styles'

export default function FriendList({ data, title, type }) {
  const { toggleModal } = useContext(ModalContext)
  const dispatch = useDispatch()

  function showOptions() {
    toggleModal('friends1', true)
  }

  function searchFriend(name) {
    dispatch(FriendsActions.searchMyFriends(name))
  }

  return (
    <C.Container>
      <C.List
        data={data}
        ListHeaderComponent={
          type == 'default' ? (
            <C.Title>{title}</C.Title>
          ) : (
            <SearchOnList search={searchFriend} />
          )
        }
        renderItem={({ item: friend }) => (
          <C.Separator>
            <FriendRow
              name={friend.name}
              openOptions={showOptions}
              type={type}
            />
          </C.Separator>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </C.Container>
  )
}

FriendList.defaultProps = {
  data: [
    {
      name: '',
    },
  ],
  type: 'default',
  // title: ''
}

FriendList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  // title: PropTypes.String.isRequired
}
