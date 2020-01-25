import React, { useState, useEffect } from 'react'
import actions, { CameraControl } from '../../redux/actions'
import { Scroll, Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ConfirmPhotos({ navigation }) {
  const dispatch = useDispatch()
  const cameraIndex = useSelector(state => state.CameraControl.cameraIndex)

  goToCamera = index => {
    dispatch(CameraControl.setIndexCamera(index))
    navigation.navigate('Camera')
  }

  return (
    <C.Container>
      <Scroll>
        <C.PhotoContent top={true}>
          <C.PhotoDisplay onPress={() => goToCamera(0)} />
          <C.PhotoDisplay onPress={() => goToCamera(1)} />
        </C.PhotoContent>
        <C.PhotoContent top={false}>
          <C.PhotoDisplay onPress={() => goToCamera(2)} />
          <C.PhotoDisplay onPress={() => goToCamera(3)} />
        </C.PhotoContent>
        <C.ButtonContent>
          <Button press={() => {}} title={'send'} confirm={true} />
        </C.ButtonContent>
      </Scroll>
    </C.Container>
  )
}

ConfirmPhotos.navigationOptions = {
  header: null,
}

ConfirmPhotos.defaultProps = {}

ConfirmPhotos.propTypes = {}
