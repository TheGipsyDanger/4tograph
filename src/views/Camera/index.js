import React, { useState, useEffect, useCallback, useRef } from 'react'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import { CameraBottom } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as Permissions from 'expo-permissions'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Camera({ images }) {
  const refCamera = useRef(null)
  const cameraIndex = useSelector(state => state.CameraControl.cameraIndex)
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

  async function capture() {
    const camera = refCamera.current
    try {
      let image = await camera.takePictureAsync({
        quality: 1,
        skipProcessing: true,
      })
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <C.Container>
      <C.CustomCamera ref={refCamera} flash={flashMode} type={cameraType}>
        <C.Top>
          <C.Text>{cameraIndex}</C.Text>
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
