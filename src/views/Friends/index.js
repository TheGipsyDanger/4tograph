import React, { useState, useEffect } from 'react'
import { Container, TextView } from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Friends() {
  return (
    <Container>
      <TextView>Friends</TextView>
    </Container>
  )
}

Friends.defaultProps = {}

Friends.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Friends)
