import React, { useState, useEffect } from 'react'
import { Container, TextView} from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Main() {
  return (
    <Container>
      <TextView>Main</TextView>
    </Container>
  );
}

Main.defaultProps = {

}

Main.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(Main)
