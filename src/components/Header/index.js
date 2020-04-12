import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { navigation } from '../../utils'
import PropTypes from 'prop-types'

export default function Header({ title }) {
  return (
    <C.Container>
      <C.IconContainer onPress={() => navigation.back()}>
        <C.Icon type={'back'} />
      </C.IconContainer>
      <C.Text>{title}</C.Text>
      <C.IconContainer></C.IconContainer>
    </C.Container>
  )
}

Header.defaultProps = {}

Header.propTypes = {}
