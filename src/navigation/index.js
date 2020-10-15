/**
 * Date: 7/28/20
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from '../pages/Login';
import Chats from '../pages/Chats';
import Chat from '../pages/Chat';
import Contacts from '../pages/Contacts';
import Setting from '../pages/Setting';

// 底部的tab
const bottomTabNavigator = createBottomTabNavigator(
  {
    Chats,
    Contacts,
    Setting,
  },
  {
    initialRouteName: 'Chats',
  },
);

const MainStackNavigator = createStackNavigator(
  {
    BottomTabNavigator: {
      screen: bottomTabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'BottomTabNavigator',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    },
  },
);

// switch navigator
const AppNavigator = createSwitchNavigator(
  {
    Login,
    App: MainStackNavigator,
  },
  {
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
