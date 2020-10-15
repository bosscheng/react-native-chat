/**
 * Date:2020/9/28
 * Desc:
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MainView from '../../components/MainView';

export default class Setting extends Component {
  static navigationOptions = () => ({
    tabBarLabel: '设置',
    tabBarOptions: {
      activeTintColor: 'rgb(66, 122, 184)',
      inactiveTintColor: 'black',
    },
    tabBarIcon: ({focused, horizontal}) => {
      const color = focused ? 'red' : '';
      return (
        <AntDesign name={'setting'} size={horizontal ? 17 : 24} color={color} />
      );
    },
  });
  render() {
    return (
      <MainView>
        <View>
          <Text>setting hello world</Text>
        </View>
      </MainView>
    );
  }
}
