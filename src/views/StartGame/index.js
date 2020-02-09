import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { Bg, Avatar, Button } from '../../components'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function StartGame() {
  function signIn() {}

  return (
    <Bg>
      <C.Container>
        <C.Content>
          <C.AvatarContainer>
            <Avatar size={60} />
            <Avatar size={60} />
          </C.AvatarContainer>
        </C.Content>
        <C.Text>{'Start game\nwith your friend!'}</C.Text>
        <C.ButtonContainer>
          <Button press={signIn} title={'Let’s play'} confirm={true} />
        </C.ButtonContainer>
      </C.Container>
    </Bg>
  )
}

StartGame.navigationOptions = {
  header: null,
}

StartGame.defaultProps = {}

StartGame.propTypes = {}
