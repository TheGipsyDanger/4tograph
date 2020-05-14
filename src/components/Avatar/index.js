import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Avatar({ size, url, teste }) {
  return <C.Avatar size={size} url={url} />
}

Avatar.defaultProps = {
  size: 32,
  url: 'https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png',
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}
