import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function FriendRow({
  name,
  listType,
  firstAction,
  secondAction
}) {
  return (
    <C.Container>
      <C.Content>
        <Avatar size={36} />
        <C.TextContent>
          <C.Text>{name}</C.Text>
          <C.IconContainer>
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
  firstAction: () => {},
  secondAction: () => {}
}

FriendRow.propTypes = {
  name: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
  firstAction: PropTypes.func.isRequired,
  secondAction: PropTypes.func.isRequired
}
