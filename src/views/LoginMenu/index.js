import React, { useState, useEffect, useCallback } from 'react'
import { Dimensions, Animated } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button } from '../../components'
import { navigate } from '../../utils/navigation'
import * as C from './styles'
import actions, { Animation, LoginRegister } from '../../redux/actions'
import PropTypes from 'prop-types'

const { height } = Dimensions.get('window')

export default function LoginMenu({ type }) {
  // PROPS TO STATE
  const showLoginModal = useSelector(state => state.Animation.showLoginModal)
  const { is_loading } = useSelector(state => state.Loading)

  // ACTIONS
  const dispatch = useDispatch()

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

  const animationModal = useCallback(() =>
    showLoginModal ? moveTop() : moveBottom()
  )

  function moveTop() {
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
  }

  function moveBottom() {
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

  function toggleModal() {
    setEmail('')
    setUsername('')
    setPassword('')
    dispatch(Animation.toggleLoginModal())
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
          <Button
            press={signIn}
            is_loading={is_loading}
            title={'ENTRAR'}
            confirm={true}
          />
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
          <Button
            press={signUp}
            is_loading={is_loading}
            title={'CADASTRAR E ENTRAR'}
            confirm={true}
          />
        </C.Distribution>
      </>
    )
  }

  function signIn() {
    dispatch(LoginRegister.signInRequest(email, password))
  }

  function signUp() {
    dispatch(LoginRegister.signUpRequest(username, email, password))
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

LoginMenu.propTypes = {
  type: PropTypes.string,
}
