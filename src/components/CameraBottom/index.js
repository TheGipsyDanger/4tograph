import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function CameraBottom({ images }) {
  return (
    <C.Container>
      <C.FirstLine>
        <C.Button onPress={() => alert('1')} first={true} />
        <C.Button onPress={() => alert('2')} first={false} />
      </C.FirstLine>
      <C.SecondLine>
        {images.map((image, index) => (
          <C.Image
            key={index}
            source={{
              uri: image
            }}
          />
        ))}
      </C.SecondLine>
      <C.CameraButtonContainer>
        <C.CameraButton onPress={() => alert('3')} />
      </C.CameraButtonContainer>
    </C.Container>
  )
}

CameraBottom.defaultProps = {}

CameraBottom.propTypes = {}
