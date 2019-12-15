import React, { useState, useEffect } from 'react'
import FriendRow from '../FriendRow'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function FriendList({ data, title }) {
  return (
    <C.Container>
      <C.List
        data={data}
        ListHeaderComponent={<C.Title>{title}</C.Title>}
        renderItem={({ item: friend }) => (
          <C.Separator>
            <FriendRow name={friend.name} />
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
      name: ''
    }
  ]
  // title: ''
}

FriendList.propTypes = {
  data: PropTypes.array.isRequired
  // title: PropTypes.String.isRequired
}
