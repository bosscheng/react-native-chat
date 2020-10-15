/**
 * Date:2020/9/29
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Button, Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';

import MainView from '../../components/MainView';
import {trim} from 'lodash';

const input = React.createRef();
const msg = {
  nameError: '用户名不能为空',
  passError: '密码不能为空',
};
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      nameError: '',
      password: '',
      passError: '',
      failcount: 0,
      submitting: false,
      loading: false,
    };
  }

  login = () => {
    let {username, password} = this.state;
    this.setState({submitting: true});
    Toast.show('登录成功，加载中…', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
    });
    this._next();
  };

  // 跳转页面。
  _next = () => {
    const {navigation} = this.props;
    navigation.navigate('App');
  };

  render() {
    const {nameError, username, passError, password, submitting} = this.state;
    return (
      <MainView>
        <View style={styles.LoginForm}>
          {/*用户名输入*/}
          <Input
            ref={input}
            placeholder="用户名"
            autoCapitalize={'none'}
            autoCorrect={false}
            leftIcon={
              <FontAwesome name="user" size={24} color="rgb(66, 122, 184)" />
            }
            errorStyle={{color: 'red'}}
            errorMessage={nameError}
            leftIconContainerStyle={{marginRight: 10}}
            value={username}
            onChangeText={(text) => {
              this.setState(
                {
                  username: text,
                },
                () => {
                  if (!username) {
                    this.setState({
                      nameError: msg.nameError,
                    });
                  } else {
                    this.setState({
                      nameError: '',
                    });
                  }
                },
              );
            }}
          />

          {/*密码输入框*/}

          <Input
            secureTextEntry={true}
            placeholder="密码"
            leftIcon={
              <FontAwesome name="lock" size={24} color="rgb(66, 122, 184)" />
            }
            errorStyle={{color: 'red'}}
            errorMessage={passError}
            leftIconContainerStyle={{marginRight: 10}}
            value={password}
            onChangeText={(text) => {
              this.setState(
                {
                  password: text,
                },
                () => {
                  if (!this.state.password) {
                    this.setState({
                      passError: msg.passError,
                    });
                  } else {
                    this.setState({
                      passError: '',
                    });
                  }
                },
              );
            }}
          />

          {/*登录按钮*/}

          <Button
            title={'登录'}
            buttonStyle={styles.LoginButton}
            loading={submitting}
            onPress={this.login}
            disabled={this.state.username === '' || this.state.password === ''}
          />
        </View>
      </MainView>
    );
  }
}
const borderWidth = StyleSheet.hairlineWidth;
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  LoginLogo: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },

  LoginForm: {
    marginHorizontal: 20,
    marginTop: 80,
    width: width - 40,
    height: height / 2,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  LoginButton: {
    width: width - 100,
  },
});
