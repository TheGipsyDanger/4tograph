import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { ModalController } from './src/components'
import { setNavigator } from './src/utils/navigation'
import ModalContext from './src/utils/ModalContext'
import Routes from './src/routes/Routes'
import store from './src/redux/store'
import * as Font from 'expo-font'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
      modalType: 'default',
      showModal: false,
    }
  }

  setModal(modalType, showModal) {
    this.setState({ modalType, showModal })
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-extraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    const { modalType, showModal } = this.state
    return (
      <>
        {this.state.fontLoaded ? (
          <ModalContext.Provider
            value={{
              modalType: modalType,
              showModal: showModal,
              toggleModal: (modalType, showModal) =>
                this.setModal(modalType, showModal),
            }}>
            <Provider store={store}>
              <Routes ref={setNavigator} />
              <ModalController />
            </Provider>
          </ModalContext.Provider>
        ) : (
          <View />
        )}
      </>
    )
  }
}
