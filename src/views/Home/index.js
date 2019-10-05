import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Scroll,
  Image,
  Body,
  ButtonContent,
  Distribution,
  Teste
} from './styles'
import { Bg, Button } from '../../components'
import { actions } from '../../redux/actions'
import LoginMenu from '../LoginMenu'
import PropTypes from 'prop-types'

function Home({ toggleLoginModal }) {
  const [type, setType] = useState('')

  function toggleModal(type) {
    setType(type)
    toggleLoginModal()
  }

  return (
    <Bg>
      <LoginMenu type={type} />
      <Scroll>
        <Container>
          <Body>
            <Image />
          </Body>
          <ButtonContent>
            <Distribution>
              <Button press={() => toggleModal('SignUp')} title={'CADASTRAR'} />
            </Distribution>
            <Distribution>
              <Button press={() => toggleModal('Login')} title={'ENTRAR'} />
            </Distribution>
          </ButtonContent>
        </Container>
      </Scroll>
    </Bg>
  )
}

export default connect(
  null,
  { ...actions.Animation }
)(Home)
