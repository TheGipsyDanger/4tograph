import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function CameraBottom({ images }) {
  return (
    <C.Container>
      {images.map((image, index) => (
        <C.Image
          key={index}
          source={{
            uri: image
          }}
        />
      ))}
    </C.Container>
  )
}

CameraBottom.defaultProps = {}

CameraBottom.propTypes = {}
