import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function CloseModalButton({ close }) {
  return (
    <C.Container onPress={close}>
      <C.Icon />
    </C.Container>
  )
}

CloseModalButton.defaultProps = {
  close: () => {},
}

CloseModalButton.propTypes = {
  close: PropTypes.func.isRequired,
}
