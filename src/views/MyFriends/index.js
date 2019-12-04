import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function MyFriends() {
  return (
    <C.Container>
      <C.Text>MyFriends</C.Text>
    </C.Container>
  );
}

MyFriends.navigationOptions = {
  header: null
}

MyFriends.defaultProps = {

}

MyFriends.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(MyFriends)
