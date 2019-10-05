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
  const [top, setTop] = useState(new Animated.Value(height))
  const [topContent, setTopContent] = useState(new Animated.Value(height))
  const [topIcon, setTopIcon] = useState(new Animated.Value(height))
  const [opacity, setOpacity] = useState(new Animated.Value(0))

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
    toggleLoginModal()
  }

  function renderLogin() {
    return (
      <>
        <Distribution>
          <Input placeholder={'EMAIL'} />
        </Distribution>
        <Distribution>
          <Input placeholder={'SENHA'} password={true} />
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
          <Input placeholder={'EMAIL'} />
        </Distribution>
        <Distribution>
          <Input placeholder={'USUÁRIO'} />
        </Distribution>
        <Distribution>
          <Input placeholder={'PASSWORD'} password={true} />
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
