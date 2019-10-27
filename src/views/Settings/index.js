import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Settings() {
  return (
    <C.Container>
      <C.Text>Settings</C.Text>
    </C.Container>
  )
}

Settings.defaultProps = {}

Settings.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Settings)
