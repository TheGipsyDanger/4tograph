import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ChallengeTitle({ isMy }) {
  function my() {
    return (
      <C.ContainerOne>
        <C.TitleOne>YOUR TURN</C.TitleOne>
      </C.ContainerOne>
    )
  }

  function their() {
    return (
      <C.ContainerTwo>
        <C.TitleTwo>THEIR TURN</C.TitleTwo>
      </C.ContainerTwo>
    )
  }

  return isMy ? my() : their()
}

ChallengeTitle.defaultProps = {
  isMy: true
}

ChallengeTitle.propTypes = {
  isMy: PropTypes.bool.isRequired
}
