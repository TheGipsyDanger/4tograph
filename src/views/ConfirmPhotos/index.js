import React, { useState, useEffect } from 'react'
import actions, { Animation } from '../../redux/actions'
import { Scroll, Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ConfirmPhotos() {
  const dispatch = useDispatch()

  console.log('RENAN', Animation)

  return (
    <C.Container>
      <Scroll>
        <C.PhotoContent top={true}>
          <C.PhotoDisplay />
          <C.PhotoDisplay />
        </C.PhotoContent>
        <C.PhotoContent top={false}>
          <C.PhotoDisplay />
          <C.PhotoDisplay />
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
