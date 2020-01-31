import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { Bg, Scroll } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function Send() {
  const dispatch = useDispatch()
  const example = useSelector(state => {})

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    }
  }, [])

  return (
    <Bg>
      <C.Content>
        <C.ContainerImage>
          <C.Image />
        </C.ContainerImage>
        <C.Text>
          {'In a few moments your\nfriend will receive your\nchallenges.'}
        </C.Text>
      </C.Content>
    </Bg>
  )
}

Send.navigationOptions = {
  header: null,
}

Send.defaultProps = {}

Send.propTypes = {}
