import React from 'react'
import * as C from './styles'

export default function Bg({ children }) {
  return (
    <C.Container>
      <C.Blur>{children}</C.Blur>
    </C.Container>
  )
}
