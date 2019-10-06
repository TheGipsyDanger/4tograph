import React, { useState, useEffect } from 'react'
import { Dimensions, Animated } from 'react-native'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  IconContainer,
  IconButton,
  Icon,
  TextView,
  Body,
  Distribution
} from './styles'
import { Input, Button } from '../../components'
import PropTypes from 'prop-types'

const { height } = Dimensions.get('window')

function LoginMenu({ showLoginModal, toggleLoginModal, type }) {
  // FIELDS
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
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
          duration: 0
        }),
        Animated.timing(top, {
          toValue: 0,
          duration: 0
        }),
        Animated.parallel([
          Animated.spring(topContent, {
            toValue: 88
          }),
          Animated.spring(topIcon, {
            toValue: 44
          })
        ])
      ]).start()
    } else {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 0
          }),
          Animated.timing(top, {
            toValue: height,
            duration: 0
          })
        ]),
        Animated.parallel([
          Animated.timing(topContent, {
            toValue: height,
            duration: 400
          }),
          Animated.timing(topIcon, {
            toValue: height,
            duration: 400
          })
        ])
      ]).start()
    }
  }

  function toggleModal() {
    setEmail('')
    setUserName('')
    setPassword('')
    toggleLoginModal()
  }

  function renderLogin() {
    return (
      <>
        <Distribution>
          <Input
            key={'1'}
            value={email}
            change={setEmail}
            placeholder={'EMAIL'}
          />
        </Distribution>
        <Distribution>
          <Input
            key={'2'}
            value={password}
            change={setPassword}
            placeholder={'SENHA'}
            password={true}
          />
        </Distribution>
        <Distribution>
          <Button title={'ENTRAR'} confirm={true} />
        </Distribution>
      </>
    )
  }

  function renderSignIn() {
    return (
      <>
        <Distribution>
          <Input
            key={'3'}
            value={email}
            change={setEmail}
            placeholder={'EMAIL'}
          />
        </Distribution>
        <Distribution>
          <Input
            key={'4'}
            value={userName}
            change={setUserName}
            placeholder={'USUÁRIO'}
          />
        </Distribution>
        <Distribution>
          <Input
            key={'5'}
            value={password}
            change={setPassword}
            placeholder={'PASSWORD'}
            password={true}
          />
        </Distribution>
        <Distribution>
          <Button title={'CADASTRAR E ENTRAR'} confirm={true} />
        </Distribution>
      </>
    )
  }

  return (
    <>
      <Container style={{ top: top }} />
      <IconContainer style={{ top: topIcon }}>
        <IconButton onPress={() => toggleModal()}>
          <Icon />
        </IconButton>
      </IconContainer>
      <Content style={{ top: topContent }}>
        <Body>{type == 'Login' ? renderLogin() : renderSignIn()}</Body>
      </Content>
    </>
  )
}

LoginMenu.defaultProps = {
  type: 'SignIn'
}

LoginMenu.propTypes = {}

const mapStateToProps = state => ({
  showLoginModal: state.Animation.showLoginModal
})

export default connect(
  mapStateToProps,
  { ...actions.Animation }
)(LoginMenu)
