import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function FriendRow({
  name,
  listType,
  openOptions,
  secondAction,
}) {
  return (
    <C.Container>
      <C.Content>
        <Avatar size={36} />
        <C.TextContent>
          <C.Text>{name}</C.Text>
          <C.IconContainer onPress={() => openOptions()}>
            <C.Icon />
          </C.IconContainer>
        </C.TextContent>
      </C.Content>
    </C.Container>
  )
}

FriendRow.defaultProps = {
  name: '',
  listType: '',
  openOptions: () => {},
  secondAction: () => {},
}

FriendRow.propTypes = {
  name: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
  openOptions: PropTypes.func.isRequired,
  secondAction: PropTypes.func.isRequired,
}
