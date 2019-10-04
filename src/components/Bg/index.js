import React from 'react'
import { View, Text } from 'react-native'
import { Container } from './styles'
import PropTypes from 'prop-types'

const Bg = props => {
  return <Container>{props.children}</Container>
}

Bg.defaultProps = {}

Bg.propTypes = {}

export default Bg
