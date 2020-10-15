/**
 * Date:2020/10/10
 * Desc:
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
} from 'react-native';

class MsgSendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      cursorIndex: 0,
      autoFocus: true,
    };
  }

  _onSelectionChange(event) {
    this.setState({
      cursorIndex: event.nativeEvent.selection.start,
    });
  }

  _onInputChangeText = (text) => {
    //设值
    this.setState({
      inputValue: text,
    });
  };

  _onFocus = () => {};

  _onSendMsg = () => {
    const {inputValue} = this.state;
    const {sendMessage} = this.props;
    if (!inputValue) {
      return;
    }

    let msgObj = {};
    msgObj.msg = inputValue;
    sendMessage(msgObj);

    this._onInputChangeText('');
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <TextInput
            ref="textInput"
            style={styles.inputStyle}
            underlineColorAndroid="transparent"
            multiline={true}
            autoFocus={true}
            editable={true}
            placeholder={'说点什么'}
            placeholderTextColor={'#bababf'}
            onSelectionChange={(event) => this._onSelectionChange(event)}
            onChangeText={(text) => this._onInputChangeText(text)}
            onFocus={() => this._onFocus()}
            defaultValue={this.state.inputValue}
          />
          <TouchableWithoutFeedback onPress={() => this._onSendMsg()}>
            <View ref="sendBtnWrapper" style={[styles.sendBtnStyle]}>
              <Text ref="sendBtnText" style={[styles.sendBtnTextStyle]}>
                发送
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  textContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  outside: {
    flex: 1,
    width: '100%',
  },

  emojiStyle: {
    height: 28,
    width: 28,
    marginLeft: 10,
  },

  inputStyle: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 32,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    borderWidth: 0,
    borderRadius: 20,
    fontSize: 15,
  },

  sendBtnTextStyle: {
    fontSize: 15,
    color: '#1d1d1d',
  },

  sendBtnStyle: {
    height: 32,
    width: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#56b2f0',
  },
});

export default MsgSendBox;
