import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { Bg } from '../../components'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function StartGame() {
  return (
    <Bg>
      <C.Container>
        <C.Text>{'Start game\nwith your friend!'}</C.Text>
      </C.Container>
    </Bg>
  )
}

StartGame.navigationOptions = {
  header: null
}

StartGame.defaultProps = {}

StartGame.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(StartGame)
