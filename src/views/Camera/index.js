import React, { useState, useEffect, useCallback, useRef } from 'react'
import actions, { CameraControl } from '../../redux/actions'
import { connect } from 'react-redux'
import { CameraBottom } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as Permissions from 'expo-permissions'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Camera({ images, navigation }) {
  const dispatch = useDispatch()
  const refCamera = useRef(null)
  const cameraIndex = useSelector(state => state.CameraControl.cameraIndex)
  const cameraInStartStep = useSelector(
    state => state.CameraControl.cameraInStartStep
  )
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
    if (camera) {
      try {
        let image = await camera.takePictureAsync({
          quality: 1,
          skipProcessing: true,
        })
        affterCapture()
      } catch (error) {
        alert(error)
      }
    }
  }

  function backToCheckView() {
    dispatch(CameraControl.changeStepCamera(true))
    navigation.goBack()
  }

  function affterCapture() {
    cameraInStartStep ? alert('Camera Normal') : backToCheckView()
  }

  return (
    <C.Container>
      <C.CustomCamera ref={refCamera} flash={flashMode} type={cameraType}>
        <C.Content>
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
        </C.Content>
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
