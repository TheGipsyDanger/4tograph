import React, { useState, useEffect } from 'react'
import { ContainerOne, ContainerTwo, TitleOne, TitleTwo } from './styles'
import PropTypes from 'prop-types'

export default function ChallengeTitle({ isMy }) {
  function my() {
    return (
      <ContainerOne>
        <TitleOne>YOUR TURN</TitleOne>
      </ContainerOne>
    )
  }

  function their() {
    return (
      <ContainerTwo>
        <TitleTwo>THEIR TURN</TitleTwo>
      </ContainerTwo>
    )
  }

  return isMy ? my() : their()
}

ChallengeTitle.defaultProps = {
  isMy: true
}

ChallengeTitle.propTypes = {}
