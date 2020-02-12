import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import actions, { Modal } from '../../redux/actions'
import ModalContext from '../../utils/ModalContext'
import FriendRow from '../FriendRow'
import PropTypes from 'prop-types'
import * as C from './styles'

export default function FriendList({ data, title }) {
  const { toggleModal } = useContext(ModalContext)
  const dispatch = useDispatch()

  function showOptions() {
    toggleModal('friends1', true)
  }

  return (
    <C.Container>
      <C.List
        data={data}
        ListHeaderComponent={<C.Title>{title}</C.Title>}
        renderItem={({ item: friend }) => (
          <C.Separator>
            <FriendRow name={friend.name} openOptions={showOptions} />
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
  // title: ''
}

FriendList.propTypes = {
  data: PropTypes.array.isRequired,
  // title: PropTypes.String.isRequired
}
