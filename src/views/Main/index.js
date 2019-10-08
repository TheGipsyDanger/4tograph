import React, { useState, useEffect } from 'react'
import { DefaultRow, ChallengeRow, ChallengeTitle } from '../../components'
import { Container, Content, Separate } from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Main() {
  return (
    <Container>
      <Content>
        <DefaultRow type={'create'} />
        <Separate>
          <ChallengeTitle isMy={true} />
          <ChallengeRow />
        </Separate>
        <Separate>
          <ChallengeTitle isMy={false} />
          <ChallengeRow />
          <ChallengeRow />
          <ChallengeRow />
        </Separate>
      </Content>
    </Container>
  )
}

Main.defaultProps = {}

Main.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Main)
