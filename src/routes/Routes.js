import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator(
  {
    Tutorial: { screen: views.Tutorial, navigationOptions: { header: null } },
    // Insert views here
    Home: { screen: views.Home, navigationOptions: { header: null } },
    LoginMenu: { screen: views.LoginMenu }
  },
  {
    mode: 'modal'
  }
)

export default createAppContainer(AppNavigator)
