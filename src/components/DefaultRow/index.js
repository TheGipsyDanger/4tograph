import React, { useState, useEffect } from 'react'
import { AntDesign } from 'react-native-vector-icons'
import { navigate } from '../../utils/navigation'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function DefaultRow({ type }) {
  return (
    <C.Container onPress={() => navigate('SelectWord')}>
      {type == 'create' ? (
        <AntDesign
          name={'plus'}
          style={{ marginHorizontal: 10 }}
          size={24}
          color="#034078"
        />
      ) : (
        <C.Avatar />
      )}
      <C.Text>Challenge a friend!</C.Text>
    </C.Container>
  )
}

DefaultRow.defaultProps = {
  type: 'create',
}

DefaultRow.propTypes = {
  type: PropTypes.string.isRequired,
}
