import React, { useState, useEffect } from 'react'
import { Dimensions, Animated } from 'react-native'
import actions, { Animation, LoginRegister } from '../../redux/actions'
import { connect } from 'react-redux'
import { Input, Button } from '../../components'
import * as C from './styles'
import PropTypes from 'prop-types'

const { height } = Dimensions.get('window')

function LoginMenu({
  showLoginModal,
  toggleLoginModal,
  type,
  signInRequest,
  signUpRequest,
}) {
  // FIELDS
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // ANIMATIONS
  const [top] = useState(new Animated.Value(height))
  const [topContent] = useState(new Animated.Value(height))
  const [topIcon] = useState(new Animated.Value(height))
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    animationModal()
  }, [showLoginModal])

  function animationModal() {
    if (showLoginModal) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 0,
        }),
        Animated.timing(top, {
          toValue: 0,
          duration: 0,
        }),
        Animated.parallel([
          Animated.spring(topContent, {
            toValue: 88,
          }),
          Animated.spring(topIcon, {
            toValue: 44,
          }),
        ]),
      ]).start()
    } else {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 0,
          }),
          Animated.timing(top, {
            toValue: height,
            duration: 0,
          }),
        ]),
        Animated.parallel([
          Animated.timing(topContent, {
            toValue: height,
            duration: 400,
          }),
          Animated.timing(topIcon, {
            toValue: height,
            duration: 400,
          }),
        ]),
      ]).start()
    }
  }

  function toggleModal() {
    setEmail('')
    setUsername('')
    setPassword('')
    toggleLoginModal()
  }

  function renderLogin() {
    return (
      <>
        <C.Distribution>
          <Input
            key={'1'}
            value={email}
            change={setEmail}
            placeholder={'EMAIL'}
          />
        </C.Distribution>
        <C.Distribution>
          <Input
            key={'2'}
            value={password}
            change={setPassword}
            placeholder={'SENHA'}
            password={true}
          />
        </C.Distribution>
        <C.Distribution>
          <Button press={signIn} title={'ENTRAR'} confirm={true} />
        </C.Distribution>
      </>
    )
  }

  function renderSignIn() {
    return (
      <>
        <C.Distribution>
          <Input
            key={'3'}
            value={email}
            change={setEmail}
            placeholder={'EMAIL'}
          />
        </C.Distribution>
        <C.Distribution>
          <Input
            key={'4'}
            value={username}
            change={setUsername}
            placeholder={'USUÁRIO'}
          />
        </C.Distribution>
        <C.Distribution>
          <Input
            key={'5'}
            value={password}
            change={setPassword}
            placeholder={'PASSWORD'}
            password={true}
          />
        </C.Distribution>
        <C.Distribution>
          <Button press={signUp} title={'CADASTRAR E ENTRAR'} confirm={true} />
        </C.Distribution>
      </>
    )
  }

  function signIn() {
    signInRequest(email, password)
  }

  function signUp() {
    signUpRequest(username, email, password)
  }

  return (
    <>
      <C.Container style={{ top: top }} />
      <C.IconContainer style={{ top: topIcon }}>
        <C.IconButton onPress={() => toggleModal()}>
          <C.Icon />
        </C.IconButton>
      </C.IconContainer>
      <C.Content style={{ top: topContent }}>
        <C.Body>{type == 'Login' ? renderLogin() : renderSignIn()}</C.Body>
      </C.Content>
    </>
  )
}

LoginMenu.defaultProps = {
  type: 'SignIn',
}

LoginMenu.propTypes = {}

const mapStateToProps = state => ({
  showLoginModal: state.Animation.showLoginModal,
})

export default connect(mapStateToProps, { ...Animation, ...LoginRegister })(
  LoginMenu
)
