/**
 * Date: 7/28/20
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainView from '../../components/MainView';

export default class Contacts extends Component {
  static navigationOptions = () => ({
    tabBarLabel: '联系人',
    tabBarOptions: {
      activeTintColor: 'rgb(66, 122, 184)',
      inactiveTintColor: 'black',
    },
    tabBarIcon: ({focused, horizontal}) => {
      const color = focused ? 'red' : '';
      return (
        <Ionicons name={'person'} size={horizontal ? 17 : 24} color={color} />
      );
    },
  });
  render() {
    return (
      <MainView>
        <View>
          <Text>contacts hello world</Text>
        </View>
      </MainView>
    );
  }
}
