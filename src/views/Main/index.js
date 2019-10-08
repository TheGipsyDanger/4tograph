import React, { useState, useEffect } from 'react'
import { DefaultRow, ChallengeRow } from '../../components'
import { Container, Content, Avatar } from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Main() {
  return (
    <Container>
      <Content>
        <DefaultRow type={'create'} />
        <ChallengeRow />
        <ChallengeRow />
        <ChallengeRow />
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
