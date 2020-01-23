import React, { useState, useEffect, useCallback } from 'react'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import { CameraBottom } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as Permissions from 'expo-permissions'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Camera({ images }) {
  const [flashMode, setFlashMode] = useState(false)
  const [cameraType, setCameraType] = useState('back')

  useEffect(() => {
    const getCameraPermission = async () =>
      await Permissions.askAsync(Permissions.CAMERA)
    getCameraPermission()
  }, [])

  const toggleFlash = useCallback(() => {
    setFlashMode(!flashMode)
  })

  const toggleCamera = useCallback(() => {
    setCameraType(cameraType == 'back' ? 'front' : 'back')
  })

  const capture = useCallback(() => {
    alert('foto tirada')
  })

  return (
    <C.Container>
      <C.CustomCamera flash={flashMode} type={cameraType}>
        <C.Top>
          <C.Text>2</C.Text>
        </C.Top>
        <C.Bottom>
          <CameraBottom
            flashMode={flashMode}
            images={images}
            toggleFlash={toggleFlash}
            cameraAction={capture}
            toggleCamera={toggleCamera}
          />
        </C.Bottom>
      </C.CustomCamera>
    </C.Container>
  )
}

Camera.navigationOptions = {
  header: null,
}

Camera.defaultProps = {
  images: [
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
  ],
}

Camera.propTypes = {}
