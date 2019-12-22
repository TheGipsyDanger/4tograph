import React, { useState, useEffect } from 'react'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import { Scroll, Button } from '../../components'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ConfirmPhotos() {
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
