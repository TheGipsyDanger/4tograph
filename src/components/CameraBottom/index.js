import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function CameraBottom({
  images,
  flashMode,
  toggleFlash,
  cameraAction,
  toggleCamera
}) {
  return (
    <C.Container>
      <C.FirstLine>
        <C.Button onPress={() => toggleFlash()} first={true}>
          <C.Icon name={flashMode ? 'flash-on' : 'flash-off'} />
        </C.Button>
        <C.Button onPress={() => cameraAction()} first={true}>
          <C.CameraButton />
        </C.Button>
        <C.Button onPress={() => toggleCamera()} first={false}>
          <C.Icon name={'autorenew'} />
        </C.Button>
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
    </C.Container>
  )
}

CameraBottom.defaultProps = {
  images: [],
  flashMode: false,
  toggleFlash: () => {},
  cameraAction: () => {},
  toggleCamera: () => {}
}

CameraBottom.propTypes = {
  images: PropTypes.array,
  flashMode: PropTypes.bool,
  toggleFlash: PropTypes.func,
  cameraAction: PropTypes.func,
  toggleCamera: PropTypes.func
}
