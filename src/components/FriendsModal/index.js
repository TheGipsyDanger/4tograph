import React, { useState, useEffect, useContext } from 'react'
import { Animated } from 'react-native'
import { metrics } from '../../styles'
import CloseModalButton from '../CloseModalButton'
import PropTypes from 'prop-types'
import ModalContext from '../../utils/ModalContext'
import * as C from './styles'

export default function FriendsModal() {
  const { toggleModal } = useContext(ModalContext)
  const [animationValue] = useState(400)
  const [bgTop] = useState(new Animated.Value(metrics.height))
  const [bgOpacity] = useState(new Animated.Value(0))
  const [containerTop] = useState(new Animated.Value(metrics.height))

  useEffect(() => {
    moveTop()
  }, [])

  function closeModal() {
    moveBottom()
    setTimeout(() => {
      toggleModal('default', false)
    }, animationValue)
  }

  function moveTop() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(bgTop, {
          toValue: 0,
          duration: 0,
        }),
        Animated.timing(bgOpacity, {
          toValue: 1,
          duration: animationValue,
        }),
        Animated.timing(containerTop, {
          toValue: 0,
          duration: animationValue,
        }),
      ]),
    ]).start()
  }

  function moveBottom() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(bgOpacity, {
          toValue: 0,
          duration: animationValue,
        }),
        Animated.timing(containerTop, {
          toValue: metrics.height,
          duration: animationValue,
        }),
      ]),
      Animated.timing(bgTop, {
        toValue: metrics.height,
        duration: 0,
      }),
    ]).start()
  }

  return (
    <>
      <C.Bg style={{ top: bgTop, opacity: bgOpacity }} />
      <C.Container style={{ top: containerTop }}>
        <C.Button>
          <CloseModalButton close={closeModal} />
        </C.Button>
        <C.Content>
          <C.Text>FriendsModal</C.Text>
        </C.Content>
      </C.Container>
    </>
  )
}

FriendsModal.defaultProps = {}

FriendsModal.propTypes = {}
