import React, { useState, useEffect } from 'react'
import { Container, TextView} from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Settings() {
  return (
    <Container>
      <TextView>Settings</TextView>
    </Container>
  );
}

Settings.defaultProps = {

}

Settings.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(Settings)
