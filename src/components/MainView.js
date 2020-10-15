/**
 * Date:2020/9/29
 * Desc:
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {getStatusBarHeight} from '../utils/reactNative';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBar: 0, //状态栏高度
    };
  }

  async componentWillMount(): void {
    getStatusBarHeight().then((result) => {
      this.setState({
        statusBar: result.height,
      });
    });
  }

  render() {
    return (
      <View
        style={[
          {marginTop: this.state.statusBar},
          styles.container,
          this.props.style,
        ]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(238, 238, 238)',
  },
});
