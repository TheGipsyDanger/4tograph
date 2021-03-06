import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Bg, Button } from '../../components'
import actions, { Animation } from '../../redux/actions'
import * as C from './styles'
import LoginMenu from '../LoginMenu'
import PropTypes from 'prop-types'
import passwordValidate from 'password-validate'

export default function Home() {
  const dispatch = useDispatch()
  const [type, setType] = useState('')

  function toggleModal(type) {
    setType(type)
    dispatch(Animation.toggleLoginModal())
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
