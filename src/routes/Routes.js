import React from 'react'
import * as views from '../views'
import { Octicons } from 'react-native-vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const TabNavigator = createBottomTabNavigator(
  {
    Main: { screen: views.Main },
    Settings: { screen: views.Settings }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Main') {
          iconName = `home`
        } else {
          iconName = `settings`
        }
        return <Octicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#034078',
      inactiveTintColor: '#848C8E'
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    App: { screen: TabNavigator, navigationOptions: { header: null } },
    Tutorial: { screen: views.Tutorial, navigationOptions: { header: null } },
    Settings: { screen: views.Settings },
    // Insert views here
    Home: { screen: views.Home, navigationOptions: { header: null } },
    LoginMenu: { screen: views.LoginMenu }
  },
  {
    mode: 'modal'
  }
)

export default createAppContainer(AppNavigator)
