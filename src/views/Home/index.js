import React, { Component } from 'react'
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
import { ScrollView, View } from 'react-native'
import { Bg, Button } from '../../components'
import { actions } from '../../redux/actions'
import LoginMenu from '../LoginMenu'
import PropTypes from 'prop-types'

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }

  toggleModal = type => {
    this.setState(state => {
      return {
        type
      }
    })
    this.props.toggleLoginModal()
  }

  render() {
    return (
      <Bg>
        <LoginMenu type={this.state.type} />
        <Scroll>
          <Container>
            <Body>
              <Image />
            </Body>
            <ButtonContent>
              <Distribution>
                <Button
                  press={() => this.toggleModal('SignUp')}
                  title={'CADASTRAR'}
                />
              </Distribution>
              <Distribution>
                <Button
                  press={() => this.toggleModal('Login')}
                  title={'ENTRAR'}
                />
              </Distribution>
            </ButtonContent>
          </Container>
        </Scroll>
      </Bg>
    )
  }
}

Home.defaultProps = {}

Home.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(
  mapStateToProps,
  { ...actions.Animation }
)(Home)
