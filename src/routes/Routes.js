import React from 'react'
import * as views from '../views'
import { fonts } from '../styles'
import { Octicons } from 'react-native-vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation-tabs'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const FriendsTopTabNavigator = createMaterialTopTabNavigator(
  {
    MyFriends: {
      screen: views.MyFriends,
      navigationOptions: ({ navigation }) => {
        return { title: 'My Friends' }
      }
    },
    OtherFriends: {
      screen: views.Friends,
      navigationOptions: ({ navigation }) => {
        return { title: 'Other users' }
      }
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        color: '#034078',
        fontWeight: 'bold',
        fontFamily: fonts.bold
      },
      style: {
        backgroundColor: 'white',
        marginTop: getStatusBarHeight(),
        elevation: 0
      },
      indicatorStyle: { backgroundColor: '#034078' }
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Main: { screen: views.Main },
    Friends: { screen: FriendsTopTabNavigator },
    Settings: { screen: views.Settings }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Main') {
          iconName = `home`
        } else if (routeName === 'Friends') {
          iconName = `organization`
        } else {
          iconName = `settings`
        }
        return <Octicons name={iconName} size={30} color={tintColor} />
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
    Home: { screen: views.Home, navigationOptions: { header: null } },
    Home: { screen: views.Home, navigationOptions: { header: null } },
    Tutorial: { screen: views.Tutorial, navigationOptions: { header: null } },
    Camera: { screen: views.Camera },
    Settings: { screen: views.Settings },
    StartGame: { screen: views.StartGame },
    MyFriends: { screen: views.MyFriends },
    // Insert views here
    LoginMenu: { screen: views.LoginMenu }
  },
  {
    mode: 'modal'
  }
)

export default createAppContainer(AppNavigator)
