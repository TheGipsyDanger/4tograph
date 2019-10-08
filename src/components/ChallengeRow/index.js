import React, { useState, useEffect } from 'react'
import {
  Container,
  TextContainer,
  AvatarContainer,
  Avatar,
  Name,
  Description
} from './styles'
import PropTypes from 'prop-types'

export default function ChallengeRow({ name, myTurn }) {
  return (
    <Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Description>
          {myTurn ? 'It’s your turn to play' : 'Waiting for them to play!'}
        </Description>
      </TextContainer>
    </Container>
  )
}

ChallengeRow.defaultProps = {
  name: 'Renan Henrique',
  myTurn: true
}

ChallengeRow.propTypes = {}
