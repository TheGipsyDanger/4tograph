import React, { useState, useEffect } from 'react'
import { DefaultRow, ChallengeRow, ChallengeTitle } from '../../components'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Main() {
  return (
    <C.Container>
      <C.Content>
        <DefaultRow type={'create'} />
        <C.Separate>
          <ChallengeTitle isMy={true} />
          <ChallengeRow />
          <ChallengeRow />
          <ChallengeRow />
        </C.Separate>
        <C.Separate>
          <ChallengeTitle isMy={false} />
          <ChallengeRow />
          <ChallengeRow />
          <ChallengeRow />
        </C.Separate>
      </C.Content>
    </C.Container>
  )
}

Main.navigationOptions = {
  header: null,
}

Main.defaultProps = {}

Main.propTypes = {}
