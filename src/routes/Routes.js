import React from 'react'
import * as views from '../views'
import Header from '../components/Header'
import routesName from './routesNames.json'
import { fonts } from '../styles'
import { Octicons } from 'react-native-vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const FriendsTopTabNavigator = createMaterialTopTabNavigator(
  {
    MyFriends: {
      screen: views.MyFriends,
      navigationOptions: ({ navigation }) => {
        return { title: 'My Friends' }
      },
    },
    OtherFriends: {
      screen: views.Friends,
      navigationOptions: ({ navigation }) => {
        return { title: 'Other users' }
      },
    },
  },
  {
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        color: '#034078',
        fontWeight: 'bold',
        fontFamily: fonts.bold,
      },
      style: {
        backgroundColor: 'white',
        marginTop: getStatusBarHeight(),
        elevation: 0,
      },
      indicatorStyle: { backgroundColor: '#034078' },
    },
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Main: { screen: views.Main },
    Friends: { screen: FriendsTopTabNavigator },
    Settings: { screen: views.Settings },
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
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#034078',
      inactiveTintColor: '#848C8E',
    },
  }
)

const loginNavigator = createStackNavigator({
  Tutorial: { screen: views.Tutorial, navigationOptions: { header: null } },
  Home: { screen: views.Home, navigationOptions: { header: null } },
})

const createGameNavigator = createStackNavigator(
  {
    SelectWord: {
      screen: views.SelectWord,
      navigationOptions: { header: null },
    },
    MyFriendsGame: {
      screen: views.MyFriendsGame,
      navigationOptions: { header: null },
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        header: <Header title={routesName[routeName]} />,
      }
    },
  }
)

const AppNavigator = createStackNavigator(
  {
    MyFriendsGame: {
      screen: views.MyFriendsGame,
      navigationOptions: { header: null },
    },
    App: { screen: TabNavigator, navigationOptions: { header: null } },
    Login: { screen: loginNavigator, navigationOptions: { header: null } },
    createGame: { screen: createGameNavigator },
    StartGame: { screen: views.StartGame },
    Send: { screen: views.Send },
    ConfirmPhotos: { screen: views.ConfirmPhotos },
    Camera: { screen: views.Camera },
    Settings: { screen: views.Settings },
    MyFriends: { screen: views.MyFriends },
    ConfirmPhotos: { screen: views.ConfirmPhotos },
    Send: { screen: views.Send },
    LoginMenu: { screen: views.LoginMenu },
    MyFriendsGame: { screen: views.MyFriendsGame },
    // Insert views here
  },
  {
    mode: 'modal',
  }
)

export default createAppContainer(AppNavigator)
