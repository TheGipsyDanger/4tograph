import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { FriendList } from '../../components'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const friends = [
  { name: 'Renan' },
  { name: 'Henrique' },
  { name: 'Pedro' },
  { name: 'Sônia' }
]

function MyFriends() {
  return (
    <C.Container>
      <FriendList data={friends} title="My Friends" />
    </C.Container>
  )
}

MyFriends.navigationOptions = {
  header: null
}

MyFriends.defaultProps = {
  myFriends: []
}

MyFriends.propTypes = {
  myFriends: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    myFriends: []
  }
}

export default connect(mapStateToProps)(MyFriends)
