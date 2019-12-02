import React, { useState, useEffect } from 'react'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import { CameraBottom } from '../../components'
import * as Permissions from 'expo-permissions'
import * as C from './styles'
import PropTypes from 'prop-types'
import axios from 'axios'

function Camera({ images }) {
  useEffect(() => {
    const getCameraPermission = async () =>
      await Permissions.askAsync(Permissions.CAMERA)
    getCameraPermission()
  }, [])

  return (
    <C.Container>
      <C.CustomCamera>
        <C.Top>
          <C.Text>2</C.Text>
        </C.Top>
        <C.Bottom>
          <CameraBottom images={images} />
        </C.Bottom>
      </C.CustomCamera>
    </C.Container>
  )
}

Camera.navigationOptions = {
  header: null
}

Camera.defaultProps = {
  images: [
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
    'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png'
  ]
}

Camera.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Camera)
