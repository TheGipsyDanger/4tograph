import React, { Component, Fragment } from 'react'
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

const { width, height } = Dimensions.get('window')

class LoginMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: new Animated.Value(height),
      topContent: new Animated.Value(height),
      topIcon: new Animated.Value(height),
      opacity: new Animated.Value(0)
    }
  }

  componentDidUpdate = () => {
    this.animationModal()
  }

  animationModal = () => {
    const { showLoginModal } = this.props
    if (showLoginModal) {
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 0
        }),
        Animated.timing(this.state.top, {
          toValue: 0,
          duration: 0
        }),
        Animated.parallel([
          Animated.spring(this.state.topContent, {
            toValue: 88
          }),
          Animated.spring(this.state.topIcon, {
            toValue: 44
          })
        ])
      ]).start()
    } else {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 0
          }),
          Animated.timing(this.state.top, {
            toValue: height,
            duration: 0
          })
        ]),
        Animated.parallel([
          Animated.timing(this.state.topContent, {
            toValue: height,
            duration: 400
          }),
          Animated.timing(this.state.topIcon, {
            toValue: height,
            duration: 400
          })
        ])
      ]).start()
    }
  }

  toggleModal = () => {
    this.props.toggleLoginModal()
  }

  renderLogin = () => (
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

  renderSignIn = () => (
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

  render() {
    let { top, topContent, topIcon } = this.state
    let { type } = this.props
    return (
      <>
        <Container style={{ top: top }} />
        <IconContainer style={{ top: topIcon }}>
          <IconButton onPress={() => this.toggleModal()}>
            <Icon />
          </IconButton>
        </IconContainer>
        <Content style={{ top: topContent }}>
          <Body>
            {type == 'Login' ? this.renderLogin() : this.renderSignIn()}
          </Body>
        </Content>
      </>
    )
  }
}

LoginMenu.defaultProps = {
  type: 'SignIn'
}

LoginMenu.propTypes = {}

const mapStateToProps = state => {
  return {
    showLoginModal: state.Animation.showLoginModal
  }
}

export default connect(
  mapStateToProps,
  { ...actions.Animation }
)(LoginMenu)
