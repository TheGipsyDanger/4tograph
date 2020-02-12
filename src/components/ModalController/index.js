import React, { useState, useEffect, useContext } from 'react'
import FriendsModal from '../FriendsModal'
import ModalContext from '../../utils/ModalContext'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function ModalController({ modal }) {
  const { modalType, showModal } = useContext(ModalContext)

  function defineModal() {
    switch (modalType) {
      case 'friends1':
        return <FriendsModal />
      default:
        break
    }
  }

  return showModal ? defineModal() : null
}

ModalController.defaultProps = {}

ModalController.propTypes = {}
