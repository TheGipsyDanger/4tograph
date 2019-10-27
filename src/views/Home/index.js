import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as C from './styles'
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
      <C.Scroll>
        <C.Container>
          <C.Body>
            <C.Image />
          </C.Body>
          <C.ButtonContent>
            <C.Distribution>
              <Button press={() => toggleModal('SignUp')} title={'CADASTRAR'} />
            </C.Distribution>
            <C.Distribution>
              <Button press={() => toggleModal('Login')} title={'ENTRAR'} />
            </C.Distribution>
          </C.ButtonContent>
        </C.Container>
      </C.Scroll>
    </Bg>
  )
}

export default connect(
  null,
  { ...actions.Animation }
)(Home)
