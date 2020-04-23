import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function FriendRow({
  friend,
  listType,
  type,
  press,
  openOptions,
  secondAction,
}) {
  function normalRow() {
    return (
      <C.Container>
        <C.Content>
          <Avatar size={36} />
          <C.TextContent>
            <C.Text>{friend.name}</C.Text>
            <C.IconContainer onPress={() => openOptions()}>
              <C.Icon />
            </C.IconContainer>
          </C.TextContent>
        </C.Content>
      </C.Container>
    )
  }

  function chooseFriendRow() {
    return (
      <C.PressContainer onPress={() => press(friend)}>
        <C.Content>
          <Avatar size={36} />
          <C.TextContent>
            <C.Text>{friend.name}</C.Text>
          </C.TextContent>
        </C.Content>
      </C.PressContainer>
    )
  }

  return type == 'default' ? normalRow() : chooseFriendRow()
}

FriendRow.defaultProps = {
  friend: { name: '' },
  listType: '',
  type: 'default',
  openOptions: () => {},
  press: () => {},
  secondAction: () => {},
}

FriendRow.propTypes = {
  friend: PropTypes.object.isRequired,
  listType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  openOptions: PropTypes.func.isRequired,
  press: PropTypes.func.isRequired,
  secondAction: PropTypes.func.isRequired,
}
