import React, { useState, useEffect } from 'react'
import actions, { CameraControl } from '../../redux/actions'
import { Scroll, Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ConfirmPhotos({ navigation }) {
  const dispatch = useDispatch()
  const teste = useSelector(state => state.CameraControl)
  const photos = useSelector(state => state.CameraControl.photos)

  function goToCamera(index) {
    dispatch(CameraControl.changeStepCamera(false))
    dispatch(CameraControl.setIndexCamera(index))
    navigation.navigate('Camera')
  }

  return (
    <C.Container>
      <Scroll>
        <C.PhotoContent top={true}>
          <C.PhotoDisplay onPress={() => goToCamera(0)}>
            <C.Photo photo={photos[0].photo} />
          </C.PhotoDisplay>
          <C.PhotoDisplay onPress={() => goToCamera(1)}>
            <C.Photo photo={photos[1].photo} />
          </C.PhotoDisplay>
        </C.PhotoContent>
        <C.PhotoContent top={false}>
          <C.PhotoDisplay onPress={() => goToCamera(2)}>
            <C.Photo photo={photos[2].photo} />
          </C.PhotoDisplay>
          <C.PhotoDisplay onPress={() => goToCamera(3)}>
            <C.Photo photo={photos[3].photo} />
          </C.PhotoDisplay>
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

ConfirmPhotos.defaultProps = {
  photos: [
    {
      id: 0,
      photo: '',
    },
    {
      id: 1,
      photo: '',
    },
    {
      id: 2,
      photo: '',
    },
    {
      id: 3,
      photo: '',
    },
  ],
}

ConfirmPhotos.propTypes = {
  photos: PropTypes.array,
}
