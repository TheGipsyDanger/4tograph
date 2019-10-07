import React from 'react'
import { Container, Blur } from './styles'

export default function Bg({ children }) {
  return (
    <Container>
      <Blur>{children}</Blur>
    </Container>
  )
}
