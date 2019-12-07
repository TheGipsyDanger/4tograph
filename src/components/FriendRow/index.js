import React, { useState, useEffect } from 'react'
import { Avatar } from '../../components'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function FriendRow({ name }) {
  return (
    <C.Container>
      <C.Content>
        <Avatar size={36} />
        <C.TextContent>
          <C.Text>{name}</C.Text>
        </C.TextContent>
      </C.Content>
    </C.Container>
  )
}

FriendRow.defaultProps = {
  name: ''
}

FriendRow.propTypes = {
  name: PropTypes.string.isRequired
}
