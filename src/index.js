/**
 * Date: 7/28/20
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux'; // 让所有容器组件都可以访问store，而不必显示地传递它。只需要在渲染根组件时使用即可。
import store from './redux/store';
import AppNavigator from './navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
