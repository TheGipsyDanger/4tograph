import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ChallengeRow({ name, myTurn }) {
  return (
    <C.Container>
      <C.AvatarContainer>
        <C.Avatar />
      </C.AvatarContainer>
      <C.TextContainer>
        <C.Name>{name}</C.Name>
        <C.Description>
          {myTurn ? 'It’s your turn to play' : 'Waiting for them to play!'}
        </C.Description>
      </C.TextContainer>
    </C.Container>
  )
}

ChallengeRow.defaultProps = {
  name: 'John Doe',
  myTurn: true
}

ChallengeRow.propTypes = {
  name: PropTypes.string.isRequired,
  myTurn: PropTypes.bool.isRequired
}
