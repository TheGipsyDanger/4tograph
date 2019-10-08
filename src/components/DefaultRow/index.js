import React, { useState, useEffect } from 'react'
import { Container, TextView, Avatar } from './styles'
import { AntDesign } from 'react-native-vector-icons'
import PropTypes from 'prop-types'

export default function DefaultRow({ type }) {
  return (
    <Container>
      {type == 'create' ? (
        <AntDesign
          name={'plus'}
          style={{ marginHorizontal: 10 }}
          size={24}
          color="#034078"
        />
      ) : (
        <Avatar />
      )}
      <TextView>Challenge a friend!</TextView>
    </Container>
  )
}

DefaultRow.defaultProps = {}

DefaultRow.propTypes = {
  type: PropTypes.string.isRequired
}
