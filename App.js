import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { setNavigator } from './src/utils/navigation'
import Routes from './src/routes/Routes'
import store from './src/redux/store'
import * as Font from 'expo-font'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-extraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <>
        {this.state.fontLoaded ? (
          <Provider store={store}>
            <Routes />
          </Provider>
        ) : (
          <View />
        )}
      </>
    )
  }
}
