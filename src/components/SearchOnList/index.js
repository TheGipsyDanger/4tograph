import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function SearchOnList({ search }) {
  return (
    <C.Container>
      <C.Row>
        <C.Input placeholder={'Search'} onChangeText={text => search(text)} />
        <C.IconContainer>
          <C.Icon />
        </C.IconContainer>
      </C.Row>
    </C.Container>
  )
}

SearchOnList.defaultProps = {}

SearchOnList.propTypes = {}
