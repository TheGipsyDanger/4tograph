import React, { useState, useEffect } from 'react'
import { Title } from '../../components'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import * as C from './styles'
import PropTypes from 'prop-types'

function Friends() {
  return (
    <C.Container>
      <Title title={'Friends'} />
    </C.Container>
  )
}

Friends.defaultProps = {}

Friends.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: [],
  }
}

export default connect(mapStateToProps)(Friends)
